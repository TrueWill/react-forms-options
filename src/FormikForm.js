import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function FormikForm() {
  return (
    <div>
      <h3>Formik form</h3>
      <Formik
        initialValues={{ name: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
        render={({ errors, status, touched, isSubmitting, dirty }) => (
          <Form>
            <label>
              Name: <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </label>
            <input
              type="submit"
              value="Submit"
              disabled={isSubmitting || !isEmpty(errors) || !dirty}
            />
          </Form>
        )}
      />
    </div>
  );
}

export default FormikForm;
