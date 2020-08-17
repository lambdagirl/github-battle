import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular';
import Battle from "./components/Battle";

function App(){
    return (
      <div className="container">
        <Battle />
      </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)