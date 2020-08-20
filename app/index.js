import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular';
import Battle from "./components/Battle";
import Results from "./components/Results";
import Nav from './components/Nav';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App(){
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/battle">
              <Battle />
            </Route>
            <Route path="/">
              <Popular />
            </Route>
            <Route path="/battle/results" component={Results} />
          </Switch>
        </div>
      </Router>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)