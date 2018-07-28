import React from 'react';
import { connect } from 'react-redux';
import {
  Field,
  reduxForm,
  SubmissionError,
  stopSubmit as stopSubmitAction,
} from 'redux-form';
import compose from 'recompose/compose';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} autoComplete="off" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const AppForm = (props) => {
  const {
    error,
    handleSubmit,
    pristine,
    reset,
    submitting,
    touch,
    stopSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit(() => {
      return sleep(1000).then(() => {
        throw new SubmissionError({
          password: 'Wrong password',
          _error: 'Login failed!'
        })
      });
    })}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>
          Log In
        </button>
        <button
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
        <button
          type="button"
          disabled={submitting}
          onClick={() => {
            touch(...['username', 'password']);
            stopSubmit('app-form', {
              username: '話は聞かせてもらった',
              password: '人類は滅亡する！',
              _error: 'な……なんだってー！！'
            })
          }}
        >
          Set Error
        </button>
      </div>
    </form>
  );
};

const enhance = compose(
  reduxForm({ form: 'app-form' }),
  connect(null, {
    stopSubmit: stopSubmitAction
  }),
);

export default enhance(AppForm);
