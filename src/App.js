import React from 'react';
import BasicForm from './BasicForm';
import HookForm from './HookForm';
import FormikForm from './FormikForm';

function App() {
  return (
    <div>
      <h1>Form test</h1>
      <BasicForm />
      <hr />
      <HookForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App;
