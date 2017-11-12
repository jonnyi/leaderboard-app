import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './store/storeFactory';

const store = storeFactory();

import App from './components/App.js';
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root')
);
