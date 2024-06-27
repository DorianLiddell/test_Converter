import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUSD, setEUR } from '../store';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
    const { usd, eur } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleUSDChange = (event) => {
        const value = event.target.value;
        if (value === '' || (!isNaN(value) && parseFloat(value) >= 0)) {
            dispatch(setUSD(value));
        }
    };

    const handleEURChange = (event) => {
        const value = event.target.value;
        if (value === '' || (!isNaN(value) && parseFloat(value) >= 0)) {
            dispatch(setEUR(value));
        }
    };

    return (
        <div className="currency-converter">
            <div className="input-group">
                <input
                    type="text"
                    id="usd"
                    placeholder="USD"
                    value={usd}
                    onChange={handleUSDChange}
                />
            </div>
            <div className="input-group">
                <input
                    type="text"
                    id="eur"
                    placeholder="EUR"
                    value={eur}
                    onChange={handleEURChange}
                />
            </div>
        </div>
    );
};

export default CurrencyConverter;