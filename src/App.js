import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import FortniteStore from './components/FortniteStore'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <FortniteStore />
          <div className="content">
            <Switch>

            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
