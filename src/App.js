import React, { Component } from 'react';
import Clock from './clock'; 
import Toggle from './toggle';
import LoggingButton from './loggingbutton'
import Greeting from './greeting'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          
        <Clock/>
        <Toggle /><br/><br />
        <LoggingButton />
        <Greeting isLoggedIn={true} />
        </p>
      </div>
    );
  }
}

export default App;
