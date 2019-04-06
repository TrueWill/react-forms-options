import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};

const renderField = field => (
  <label>
    {field.label + ' '}
    <input {...field.input} type={field.type} />
    {field.meta.touched && field.meta.error && <div>{field.meta.error}</div>}
  </label>
);

function ReduxForm({ handleSubmit }) {
  return (
    <div>
      <h3>Redux Form (redux-form)</h3>
      <form onSubmit={handleSubmit}>
        <Field name="name" type="text" component={renderField} label="Name:" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default reduxForm({ form: 'name-form', validate })(ReduxForm);
