import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to='/login'>Login</Link>
            <Link to='/friends-list'>Friends List</Link>
          </nav>
        </header>
        <Switch>
          <Route path='/friends-list' />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
