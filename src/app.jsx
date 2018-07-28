import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import AppForm from './AppForm';

const store =  createStore(combineReducers({
  form: reduxFormReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <AppForm />
  </Provider>,
  document.getElementById('app'),
);
