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
  const [theme,setTheme] = React.useState('light')
  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={theme}>
          <div className="container">
            <Nav toggleTheme = {toggleTheme}/>
            <Switch>
              <Route exact path="/">
                <Popular />
              </Route>
              <Route exact path="/battle">
                <Battle />
              </Route>
              <Route path="/battle/results" component={Results} />

              <Route
                path="*"
                component={() => {
                  return <h3>404 - Not found</h3>;
                }}
              />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)