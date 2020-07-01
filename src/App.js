import React from 'react';
import logo from './logo.svg';
import './App.css';

const appScheme = "kbp://";
const appName = 'KB-PURE';

function App() {
  const isIos = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  window.location.href = appScheme;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Moving to {appName} {isIos ? 'Iphone' : 'Android'} App
        </p>
        <a className="App-link" href={appScheme}>
          Click here to move back to the mobile app
        </a>
      </header>
    </div>
  );
}

export default App;
