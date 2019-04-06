import React, { Component } from 'react';

class BasicForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  // Class property arrow function
  handleSubmit = e => {
    console.log(this.state.name);
    e.preventDefault();
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <h3>Controlled component (class)</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{' '}
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default BasicForm;
