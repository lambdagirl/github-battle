import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular';
import Battle from "./components/Battle";
import Results from "./components/Results";
import Nav from './components/Nav';
import {ThemeProvider} from './context/theme'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App(){
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Popular />
            </Route>
            <Route exact path="/battle">
              <Battle />
            </Route>
            <Route path='/battle/results' component={Results} />
              
            <Route path="*" 
              component = {() => { return <h3>404 - Not found</h3>}} 
            />
          </Switch>
        </div>
      </Router>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)