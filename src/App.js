import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Stocks from './pages/Stocks'
import FortniteStore from './components/FortniteStore'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <div className="content">
            <Switch>
              <Route path='/Stocks' exact component={Stocks}/>
              <Route path='/About' exact component={About}/>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
