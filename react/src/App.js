import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './Form/Form'

class App extends Component {
  state = {
    characters: []
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Create an Account</h2>
          <Form handleSubmit={this.handleSubmit} />
        </header>
      </div>
    );
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

}

export default App;
