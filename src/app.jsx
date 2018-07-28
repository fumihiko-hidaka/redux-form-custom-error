import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers';
import AppForm from './container/AppForm';

ReactDOM.render(
  <Provider store={store}>
    <AppForm />
  </Provider>,
  document.getElementById('app'),
);
