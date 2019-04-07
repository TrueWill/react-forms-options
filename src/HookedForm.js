import React from 'react';
import { Form, Field } from 'hooked-form';

const StringField = ({ value, label, onChange, onFocus, onBlur, type, error, touched }) => {
  const onInput = React.useCallback((e) => onChange(e.currentTarget.value));
  return (
    <label>
      {label + ' '}
      <input value={value} onChange={onInput} onBlur={onBlur} onFocus={onFocus} type={type} />
      {touched && error && <div>{error}</div>}
    </label>
  )
}

const HookedForm = () => (
  <div>
    <h3>Hooked Form</h3>
    <Field label="Name:" component={StringField} fieldId="name" />
    <input type="submit" value="Submit" />
  </div>
);

export default Form({
  onSubmit: console.log,
  validateOnBlur: true,
  validateOnChange: true,
  validate: (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    return errors;
  }
})(HookedForm);
