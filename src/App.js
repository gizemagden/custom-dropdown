import React, { Component } from 'react';
import './App.css';
import CustomDropdown from './CustomDropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CustomDropdown/>
        </header>
      </div>
    );
  }
}

export default App;
