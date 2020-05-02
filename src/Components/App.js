import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Welcome from '../Pages/Welcome';
import Stats from '../Pages/Stats';
import Header from './Header/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stats">Stats</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/stats" component={Stats} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
