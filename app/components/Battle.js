import React from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";
import PropTypes from "prop-types";

function Instructions() {
  return (
    <div className="instructions-container">
      <h1 className="center-text header-lg">Instructions</h1>
      <ol className="container-sm grid center-text battle-instructions">
        <li>
          <h3 className="header-sm">Enter two Github users</h3>
          <FaUserFriends
            className="bg-light"
            color="rgb(255, 191, 116)"
            size={140}
          />
        </li>
        <li>
          <h3 className="header-sm">Battle</h3>
          <FaFighterJet className="bg-light" color="#727272" size={140} />
        </li>
        <li>
          <h3 className="header-sm">See the winners</h3>
          <FaTrophy className="bg-light" color="rgb(255, 215, 0)" size={140} />
        </li>
      </ol>
    </div>
  );
}

function PlayerInput({onSubmit, label}){
    const [username, setUsername] = React.useState('null')

    function handleSubmit(event){
        event.preventDefault();
        onSubmit(username);
    }
    function handleChange(event){
        setUsername(event.target.value)
    }

    return (
      <form className="column player" onSubmit={handleSubmit}>
        <label htmlFor="username" className="player-label">
          {label}
        </label>
        <div className="row player-inputs">
          <input
            type="text"
            id="username"
            className="input-light"
            placeholder="github username"
            autoComplete="off"
            value={username}
            onChange={handleChange}
          />
          <button
            className="btn dark-btn"
            type="submit"
            disabled={!username}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }


PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default class Battle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />
        <PlayerInput label="label" onSubmit={(v)=>console.log(v)}/>
      </React.Fragment>
    );
  }
}
