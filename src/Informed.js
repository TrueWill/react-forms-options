import React from 'react';
import { Form, Text } from 'informed';

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

const validateName = value => {
  return value && value.length <= 30
    ? undefined
    : 'Name is required (max 30 characters)';
};

function Informed() {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <div>
      <h3>Informed</h3>
      <Form onSubmit={handleSubmit}>
        {({ formState }) => (
          <div>
            <label>
              {' '}
              Name:{' '}
              <Text
                field="name"
                validate={validateName}
                validateOnBlur
                validateOnChange
              />
            </label>
            <input
              type="submit"
              value="Submit"
              disabled={!isEmpty(formState.errors) || !formState.dirty}
            />
            {formState.touched.name && formState.errors.name && (
              <div>{formState.errors.name}</div>
            )}
          </div>
        )}
      </Form>
    </div>
  );
}

export default Informed;
