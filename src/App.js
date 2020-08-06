import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'Assets/style/style.scss';
import Routes from 'Routes';

/**
 * Main App.
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
