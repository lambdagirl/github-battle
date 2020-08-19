import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular';
import Battle from "./components/Battle";
import Results from "./components/Results";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(){
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Battle} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)