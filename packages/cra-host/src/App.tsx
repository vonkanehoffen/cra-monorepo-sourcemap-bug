import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Lorem } from "@akj-dev/lorem";
import { LocalErrorTest } from './LocalErrorTest'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Lorem foo="Hello" />
        <LocalErrorTest foo="Hiya" />
      </header>
    </div>
  );
}

export default App;
