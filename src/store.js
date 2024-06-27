import { createStore } from 'redux'

const SET_USD = 'SET_USD';
const SET_EUR = 'SET_EUR';

export const setUSD = (value) => ({
    type: SET_USD,
    payload: value,
});

export const setEUR = (value) => ({
    type: SET_EUR,
    payload: value,
});

const initialState = {
    usd: '',
    eur: '',
    exchangeRate: 1.07,
};

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USD:
            const eurValue = action.payload ? (parseFloat(action.payload) / state.exchangeRate).toFixed(2) : '';
            return { ...state, usd: action.payload, eur: eurValue };
        case SET_EUR:
            const usdValue = action.payload ? (parseFloat(action.payload) * state.exchangeRate).toFixed(2) : '';
            return { ...state, eur: action.payload, usd: usdValue };
        default:
            return state;
    }
};

export const store = createStore(currencyReducer);