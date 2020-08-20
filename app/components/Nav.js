import React from 'react'
import {NavLink} from 'react-router-dom'
import ThemeContext from "../context/theme";
const activeStyle = {
  color: 'rgb(187, 46, 31)'
}
export default function Nav({toggleTheme}){
  const theme = React.useContext(ThemeContext)
    return (
      <nav className="row space-between">
        <ul className="row nav">
          <li>
            <NavLink to="/" activeStyle={activeStyle} className="nav-link">
              Repos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/battle"
              activeStyle={activeStyle}
              className="nav-link"
            >
              battle
            </NavLink>
          </li>
        </ul>
        <button onClick={toggleTheme} className="btn-clear" style={{fontSize:30}}>
          {theme === "light" ? "🔦" : "💡"}
        </button>
      </nav>
    );
}