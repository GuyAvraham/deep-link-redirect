import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const isIos = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  if (isIos) {
    window.location.href = "kbp://";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Moving to KB-PURE Iphone App
          </p>
          <a className="App-link" href="kbp://">
            לחצי כאן כדיי לחזור לאפליקציה
          </a>
        </header>
      </div>
    );
  } else {
    window.location.href = "kbp://";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Go To KB-PURE Android App
          </p>
          <a className="App-link" href="kbp://">
            לחצי כאן כדיי לחזור לאפליקציה
          </a>
        </header>
      </div>
    );
  }
}

export default App;
