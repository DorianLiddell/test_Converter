import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import CurrencyConverter from './component/CurrencyConverter';

const App = () => (
  <Provider store={store}>
    <CurrencyConverter />
  </Provider>
);

export default App;
