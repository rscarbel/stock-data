import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Stocks from './pages/Stocks';
import Home from './pages/Home';
import Company from './pages/Company';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <div className="content">
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/stocks' exact component={Stocks}/>
              <Route path='/about' exact component={About}/>
              <Route path="/company/:companyIndex">
              <Company />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
