import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomDropdown from './CustomDropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <CustomDropdown/>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
