import React from 'react';
import BasicForm from './BasicForm';
import HookForm from './HookForm';
import FormikForm from './FormikForm';
import ReduxForm from './ReduxForm';

function App() {
  const reduxSubmit = values => {
    console.log('Redux submit', values);
  };

  return (
    <div>
      <h1>Form test</h1>
      <BasicForm />
      <hr />
      <HookForm />
      <hr />
      <FormikForm />
      <hr />
      <ReduxForm onSubmit={reduxSubmit} />
    </div>
  );
}

export default App;
