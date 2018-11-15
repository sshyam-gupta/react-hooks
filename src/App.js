import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WindowResize from './Component/WindowResize';
import 'frow';
import APICall from './Component/APICall';
import LocalStorageObserver from './Component/LocalstorageObserver';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LocalStorageObserver />
          <WindowResize />
          <APICall />
        </header>
      </div>
    );
  }
}

export default App;
