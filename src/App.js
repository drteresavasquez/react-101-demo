import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to Sexy Land"/>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
