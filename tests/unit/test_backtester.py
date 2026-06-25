import numpy as np
import pandas as pd
from optimization import _legacy


def test_get_signal_history_columns():
    HitRatioBacktester = _legacy.load_backtester_cls()
    
    # Setup test data (10 periods)
    idx = pd.bdate_range("2020-01-01", periods=10)
    
    # Prices:
    # Day 0: 100
    # Day 1: 102 (UP)
    # Day 2: 98 (DOWN)
    # Day 3: 98.1 (Sideways)
    # Day 4 to 9: flat
    price = pd.Series([100.0, 102.0, 98.0, 98.1, 98.1, 98.1, 98.1, 98.1, 98.1, 98.1], index=idx)
    
    # 3 signals:
    # 1. Day 0: Long (1.0), correct because Day 5 is 98.1 (down, so actually incorrect!)
    # 2. Day 1: Long (1.0), forward price at Day 6 is 98.1 (down, incorrect)
    # 3. Day 2: Short (-1.0), forward price at Day 7 is 98.1 (up, incorrect/flat)
    preds = pd.DataFrame(
        {
            "signal": [1.0, 1.0, -1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            "confidence": [0.6, 0.6, 0.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            "consensus_score": [0.3, 0.3, -0.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
        },
        index=idx
    )
    
    bt = HitRatioBacktester(forward_days=[5])
    history = bt.get_signal_history(preds, price, days=5)
    
    # Check that the columns exist
    assert "action_performed" in history.columns
    assert "market_behavior" in history.columns
    
    # Check rows
    # Row 0: index=Day 0, signal=1.0, close=100. Day 5 is 98.1 -> fwd_return = -1.9%
    # correct should be False, action_performed = Trigger Stop Loss, market_behavior = bearish
    row0 = history.iloc[0]
    assert row0["correct"] == False
    assert row0["action_performed"] == "Trigger Stop Loss"
    assert row0["market_behavior"] == "bearish"
    
    # Row 1: index=Day 1, signal=1.0, close=102. Day 6 is 98.1 -> fwd_return = -3.8%
    # correct should be False, action_performed = Trigger Stop Loss, market_behavior = bearish
    row1 = history.iloc[1]
    assert row1["correct"] == False
    assert row1["action_performed"] == "Trigger Stop Loss"
    assert row1["market_behavior"] == "bearish"


def test_get_signal_history_sideways():
    HitRatioBacktester = _legacy.load_backtester_cls()
    
    idx = pd.bdate_range("2020-01-01", periods=10)
    # Price moves very little (within 0.5% threshold)
    price = pd.Series([100.0, 100.1, 100.0, 100.1, 100.0, 100.1, 100.0, 100.1, 100.0, 100.1], index=idx)
    
    preds = pd.DataFrame(
        {
            "signal": [1.0, -1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            "confidence": [0.5, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            "consensus_score": [0.2, -0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
        },
        index=idx
    )
    
    bt = HitRatioBacktester(forward_days=[5])
    history = bt.get_signal_history(preds, price, days=5)
    
    # Row 0: index=Day 0, close=100.0. Day 5 is 100.1 -> fwd_return = +0.1% (< +0.5%)
    # correct is True (positive return for long), action_performed = Take Profit, market_behavior = sideways
    row0 = history.iloc[0]
    assert row0["correct"] == True
    assert row0["action_performed"] == "Take Profit"
    assert row0["market_behavior"] == "sideways"
    
    # Row 1: index=Day 1, close=100.1. Day 6 is 100.0 -> fwd_return = -0.1% (> -0.5%)
    # correct is True (negative return for short), action_performed = Take Profit, market_behavior = sideways
    row1 = history.iloc[1]
    assert row1["correct"] == True
    assert row1["action_performed"] == "Take Profit"
    assert row1["market_behavior"] == "sideways"
