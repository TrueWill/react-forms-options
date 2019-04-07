import React from 'react';
import BasicForm from './BasicForm';
import HookForm from './HookForm';
import FormikForm from './FormikForm';
import ReduxForm from './ReduxForm';
import FinalForm from './FinalForm';
import Informed from './Informed';
import HookedForm from './HookedForm';

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
      <hr />
      <FinalForm />
      <hr />
      <Informed />
      <hr />
      <HookedForm />
    </div>
  );
}

export default App;
