import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstClass from './Component/FirstClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello MK <code>src/App.js</code> and save to reload.
        </p>
        <FirstClass />
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

export default App;
