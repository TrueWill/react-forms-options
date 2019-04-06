import React, { useState } from 'react';

// No class needed!
function HookForm() {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    console.log(name);
    e.preventDefault();
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <h3>Controlled component (hooks)</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default HookForm;
