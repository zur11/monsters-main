import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //* Calls the constructor Method on Component Class

    this.state = { //* super() gives access to this.state
      string: 'Hello Villa ilalo'
    }
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({string: 'Welcome to the Villa'})}>Change Text
        </button>
      </header>
    </div>
    )
  }
}

export default App;
