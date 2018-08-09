import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import store from './store';
import routes from './routes';
import DevTools from './DevTools';

// Simple test
import { countries } from './actions/actions-countries';
store.dispatch(countries.getCountries());

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('root')
);