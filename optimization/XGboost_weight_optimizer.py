"""
XGBoost method: a gradient-boosted-tree model over the ~400 indicators.

This is the XGBoost counterpart to `gbm_weight_optimizer.py` (LightGBM) and
`nn_weight_optimizer.py` (hand-coded linear backprop). It is kept as its own
module/method so XGBoost can be selected, tuned and compared head-to-head against
the others on the SAME walk-forward harness.

It shares every design choice with the LightGBM module so the comparison is fair:

  * SAME target as the NN — the ATR-relative forward return `r_t` (scale-free across
    symbols), reused via `nn_weight_optimizer._forward_targets`. So this is a
    REGRESSOR on conviction, not a raw up/down classifier; that keeps the objective,
    backtester and threshold-selection logic identical.
  * SAME output contract — `predictions_frame()` returns signal/confidence/
    consensus_score, scored by the same `objective.evaluate` and selected on the
    held-out window. No look-ahead: we ONLY ever fit on the train slice.
  * predicted return -> score: `score = tanh(r_hat / score_scale)` where `score_scale`
    is the std of the model's own predictions ON TRAIN (fit on train only, no leak).

XGBoost is imported lazily; if it is not installed, `train()` raises `XGBUnavailable`
and the runner records a skip note (same pattern as the LightGBM `GBMUnavailable`
and the Optuna `ParamSearchUnavailable` paths).

Determinism (FR-014): single-threaded, fixed seed -> reproducible models/metrics.
"""
from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, List, Tuple

import numpy as np
import pandas as pd

from .nn_weight_optimizer import _forward_targets  # reuse the exact same target


class XGBUnavailable(RuntimeError):
    """Raised when XGBoost cannot be imported."""


# Alias so this module is a drop-in for the runner's gradient-boosting branch,
# which catches `gbmopt.GBMUnavailable` (runner imports this module as `gbmopt`).
GBMUnavailable = XGBUnavailable


def _make_regressor(seed: int, n_estimators: int, learning_rate: float,
                    max_depth: int, subsample: float, colsample: float,
                    min_child_weight: int, reg_lambda: float, gamma: float):
    """Return an unfitted XGBoost regressor, or raise XGBUnavailable."""
    try:
        import xgboost as xgb  # lazy
    except Exception as exc:  # not installed / import failed
        raise XGBUnavailable(f"xgboost unavailable: {exc}")
    return xgb.XGBRegressor(
        objective="reg:squarederror",
        n_estimators=n_estimators, learning_rate=learning_rate,
        max_depth=max_depth if max_depth > 0 else 6,
        subsample=subsample, colsample_bytree=colsample,
        min_child_weight=min_child_weight, reg_lambda=reg_lambda, gamma=gamma,
        n_jobs=1, random_state=seed, verbosity=0,
    )


@dataclass
class XGBModel:
    columns: List[str]                 # indicator column order fed to the model
    estimator: object                  # fitted regressor (predicts ATR-rel return)
    score_scale: float = 1.0           # std of train predictions (score normaliser)
    threshold: float = 0.15

    # --- inference -----------------------------------------------------------
    def _raw(self, indicators_df: pd.DataFrame) -> np.ndarray:
        X = np.nan_to_num(indicators_df[self.columns].to_numpy(dtype=float), nan=0.0)
        return np.asarray(self.estimator.predict(X), dtype=float)

    def scores(self, indicators_df: pd.DataFrame) -> np.ndarray:
        """Predicted ATR-relative return squashed to a [-1, 1] conviction score."""
        r_hat = self._raw(indicators_df)
        return np.tanh(r_hat / (self.score_scale + 1e-9))

    def predictions_frame(self, indicators_df: pd.DataFrame) -> pd.DataFrame:
        """signal/confidence/consensus_score — identical contract to NN/LightGBM."""
        score = self.scores(indicators_df)
        signal = np.where(score > self.threshold, 1.0,
                          np.where(score < -self.threshold, -1.0, 0.0))
        return pd.DataFrame(
            {"signal": signal, "confidence": np.abs(score), "consensus_score": score},
            index=indicators_df.index,
        )

    # --- introspection -------------------------------------------------------
    def feature_importances(self) -> Dict[str, float]:
        imp = getattr(self.estimator, "feature_importances_", None)
        if imp is None:
            return {}
        return {c: float(v) for c, v in zip(self.columns, imp)}

    def top_indicators(self, k: int = 15) -> List[Tuple[str, float]]:
        pairs = list(self.feature_importances().items())
        pairs.sort(key=lambda kv: kv[1], reverse=True)
        return pairs[:k]

    def to_config(self) -> dict:
        """Serializable summary (the fitted trees themselves are not schema-persisted)."""
        imp = self.feature_importances()
        used = sum(1 for v in imp.values() if v > 0)
        return {
            "method": "xgb",
            "backend": "xgboost",
            "threshold": float(self.threshold),
            "score_scale": float(self.score_scale),
            "used_feature_count": int(used),
            "top_indicators": self.top_indicators(),
        }


# --- fitting -----------------------------------------------------------------
def _fit(columns: List[str], X: np.ndarray, r: np.ndarray, seed: int,
         n_estimators: int, learning_rate: float, max_depth: int, subsample: float,
         colsample: float, min_child_weight: int, reg_lambda: float, gamma: float,
         threshold: float) -> XGBModel:
    """Core fit on already-masked (finite) arrays; shared by single + pooled paths."""
    est = _make_regressor(seed, n_estimators, learning_rate, max_depth, subsample,
                          colsample, min_child_weight, reg_lambda, gamma)
    if len(r) == 0:
        return XGBModel(columns=columns, estimator=est, score_scale=1.0, threshold=threshold)
    est.fit(X, r)
    # Normalise score by the spread of the model's OWN train predictions (no leak).
    train_pred = np.asarray(est.predict(X), dtype=float)
    scale = float(np.std(train_pred))
    return XGBModel(columns=columns, estimator=est,
                    score_scale=scale if scale > 1e-9 else 1.0, threshold=threshold)


def _symbol_arrays(indicators_df: pd.DataFrame, price: pd.Series, atr: pd.Series,
                   forward_days, columns: List[str]):
    """(X, r) for one symbol's slice over a fixed column order, finite-masked."""
    X = np.nan_to_num(indicators_df[columns].to_numpy(dtype=float), nan=0.0)
    r = _forward_targets(price, atr, forward_days)
    mask = np.isfinite(r)
    return X[mask], r[mask]


def train(indicators_df: pd.DataFrame, price: pd.Series, atr: pd.Series,
          forward_days, seed: int = 42, n_estimators: int = 300,
          learning_rate: float = 0.05, max_depth: int = 4, subsample: float = 0.8,
          colsample: float = 0.8, min_child_weight: int = 1, reg_lambda: float = 1.0,
          gamma: float = 0.0, threshold: float = 0.15,
          backend=None, num_leaves=None) -> XGBModel:
    """Fit an XGBoost model on a SINGLE symbol's (train) slice.

    Raises XGBUnavailable if xgboost is not installed.

    `backend`/`num_leaves` are accepted and ignored: they are LightGBM-only knobs
    passed by the runner's shared gradient-boosting branch, kept here so this module
    is a drop-in for that call site.
    """
    columns = list(indicators_df.columns)
    X, r = _symbol_arrays(indicators_df, price, atr, forward_days, columns)
    return _fit(columns, X, r, seed, n_estimators, learning_rate, max_depth, subsample,
                colsample, min_child_weight, reg_lambda, gamma, threshold)


def train_pooled(prep_list, forward_days, columns: List[str], seed: int = 42,
                 n_estimators: int = 500, learning_rate: float = 0.05, max_depth: int = 5,
                 subsample: float = 0.8, colsample: float = 0.8, min_child_weight: int = 1,
                 reg_lambda: float = 1.0, gamma: float = 0.0,
                 threshold: float = 0.15, backend=None, num_leaves=None) -> XGBModel:
    """Fit ONE global XGBoost model on TRAIN rows pooled across all symbols. `prep_list`
    items are dicts with keys ind/price/atr/win, as built by `batch._prepare`.

    `backend`/`num_leaves` accepted and ignored (LightGBM-only; drop-in compatibility).
    """
    Xs, rs = [], []
    for p in prep_list:
        tr = p["win"].train_slice
        Xi, ri = _symbol_arrays(p["ind"].iloc[tr], p["price"].iloc[tr],
                                p["atr"].iloc[tr], forward_days, columns)
        if len(ri):
            Xs.append(Xi)
            rs.append(ri)
    if not Xs:
        return _fit(columns, np.empty((0, len(columns))), np.empty((0,)), seed,
                    n_estimators, learning_rate, max_depth, subsample, colsample,
                    min_child_weight, reg_lambda, gamma, threshold)
    X = np.vstack(Xs)
    r = np.concatenate(rs)
    return _fit(columns, X, r, seed, n_estimators, learning_rate, max_depth, subsample,
                colsample, min_child_weight, reg_lambda, gamma, threshold)
