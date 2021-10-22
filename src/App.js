import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import { BorwserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <div className="content">
            <Switch>

            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
