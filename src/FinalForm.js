import React from 'react';
import { Form, Field } from 'react-final-form';

const required = value => (value ? undefined : 'Required');

const renderField = field => (
  <label>
    {field.label + ' '}
    <input {...field.input} type={field.type} />
    {field.meta.touched && field.meta.error && <div>{field.meta.error}</div>}
  </label>
);

function FinalForm() {
  const mainHandleSubmit = values => {
    console.log(values);
  };

  return (
    <div>
      <h3>React Final Form</h3>
      <Form
        onSubmit={mainHandleSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              type="text"
              component={renderField}
              validate={required}
              label="Name:"
            />
            <input type="submit" value="Submit" disabled={invalid} />
          </form>
        )}
      />
    </div>
  );
}

export default FinalForm;
