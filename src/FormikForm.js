import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required')
    .max(50, 'Too long')
});

function FormikForm() {
  return (
    <div>
      <h3>Formik form</h3>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={validationSchema}
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
