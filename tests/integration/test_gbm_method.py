"""GBM method: LightGBM/XGBoost regressor trains, predicts, and is deterministic.

Mirrors test_nn_method.py. Skips cleanly if no boosting backend is installed so the
suite still passes in a minimal environment (same spirit as the Optuna-optional path).
"""
import numpy as np
import pytest

from optimization import XGboost_weight_optimizer as gbmopt, data_loader, runner
from tests.conftest import make_ohlcv, make_indicators


def _inputs(n=400, seed=1):
    o = make_ohlcv(n=n, seed=seed)
    ind = make_indicators(o, seed=seed)
    price = o["close"].astype(float)
    atr = data_loader.compute_atr(o, 14)
    return ind, price, atr


def _backend_available():
    try:
        import xgboost  # noqa: F401
        return True
    except Exception:
        return False


pytestmark = pytest.mark.skipif(
    not _backend_available(), reason="xgboost not installed")


def test_training_predicts_and_is_deterministic():
    ind, price, atr = _inputs()
    m1 = gbmopt.train(ind, price, atr, [5, 10], n_estimators=100, seed=42)
    m2 = gbmopt.train(ind, price, atr, [5, 10], n_estimators=100, seed=42)
    p1 = m1.predictions_frame(ind)
    p2 = m2.predictions_frame(ind)
    # deterministic: identical predictions across runs (FR-014)
    assert np.allclose(p1["consensus_score"].to_numpy(), p2["consensus_score"].to_numpy())
    # output contract: signal in {-1,0,1}, confidence in [0,1]
    assert set(np.unique(p1["signal"].to_numpy())).issubset({-1.0, 0.0, 1.0})
    assert p1["confidence"].between(0.0, 1.0).all()
    # learned something: at least one feature got non-zero importance
    assert m1.to_config()["used_feature_count"] > 0


def test_run_symbol_gbm_reports_comparison(real_or_synth_csv):
    _, symbol, csv_path = real_or_synth_csv
    res = runner.run_symbol(symbol, csv_path, method="gbm", seed=42, gbm_n_estimators=150)
    assert res.status in ("improved", "no_improvement")
    assert res.baseline_metrics is not None and res.tuned_metrics is not None
    assert "objective_score" in res.tuned_metrics
    if res.accepted:
        assert res.selected_config is not None and "gbm" in res.selected_config
        assert "top_indicators" in res.selected_config["gbm"]


def test_run_symbol_gbm_is_deterministic(real_or_synth_csv):
    _, symbol, csv_path = real_or_synth_csv
    a = runner.run_symbol(symbol, csv_path, method="gbm", seed=7, gbm_n_estimators=120)
    b = runner.run_symbol(symbol, csv_path, method="gbm", seed=7, gbm_n_estimators=120)
    assert a.tuned_metrics == b.tuned_metrics
    assert a.status == b.status


def test_method_xgb_alias_matches_gbm(real_or_synth_csv):
    """'xgb' is an explicit alias of the gradient-boosting method; same result,
    but its accepted config is keyed under 'xgb'."""
    _, symbol, csv_path = real_or_synth_csv
    g = runner.run_symbol(symbol, csv_path, method="gbm", seed=11, gbm_n_estimators=120)
    x = runner.run_symbol(symbol, csv_path, method="xgb", seed=11, gbm_n_estimators=120)
    assert x.tuned_metrics == g.tuned_metrics
    assert x.status == g.status
    if x.accepted:
        assert "xgb" in x.selected_config
