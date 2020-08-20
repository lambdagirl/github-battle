import React, { useState } from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy, FaTimesCircle } from "react-icons/fa";
import Results from './Results';
import {Link} from 'react-router-dom'
function Instructions(){
    return (
      <div className="instructions-container">
        <h1 className="header-lg center-text">Battle</h1>
        <ol className="container-sm grid center-text battle-instructions">
          <li>
            <h3 className="header-sm">Enter 2 users</h3>
            <FaUserFriends className="bg-light" size={140} />
          </li>
          <li>
            <h3 className="header-sm">Battle</h3>
            <FaFighterJet className="bg-light" size={140} />
          </li>
          <li>
            <h3 className="header-sm">Winner</h3>
            <FaTrophy className="bg-light" size={140}  />
          </li>
        </ol>
      </div>
    );
}

function PlayerInput({onSubmit, label}){
    const [username, setUsername] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(username);
    };

  const handleChange = (event) => setUsername(event.target.value)
    return (
        <form onSubmit={handleSubmit} className="column player">
            <label htmlFor="username" className="player-label">{label}
            </label>
            <div className="row player-input">
                <input 
                    className= "input-light"
                    type="text" 
                    id="username"
                    value={username}
                    placeholder="github username"
                    onChange={handleChange}
                    />
                <button type="submit" className="btn btn-dark" disabled={!username} >
                    Submit
                </button>
            </div>
        </form>
    )
}

function PlayerPreview({username, onReset, label}){
    return (
      <div className="column player">
        <h3 className="player-label">{label}</h3>
        <div className="row">
          <div className="player-info">
            <img
              className="avatar-small"
              src={`https://github.com/${username}.png?size=200`}
              alt={`Avatar for ${username}`}
            />
            <a href={`http://github.com/${username}`} className="link">
              {" "}
              {username}{" "}
            </a>
          </div>
          <button
            onClick={onReset}
            className="btn-clear flex-center .btn-space"
          >
            <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
          </button>
        </div>
      </div>
    );
}

export default function Battle() {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);


  const handleSubmit = (id, player) =>
    id === "playerOne" ? setPlayerOne(player) : setPlayerTwo(player);

  const handleReset = (id) =>
    id === "playerOne" ? setPlayerOne(null) : setPlayerTwo(null);
  return (
    <>
      <Instructions />
      <div className="players-container">
        <h1 className="center-text header-lg"> Players</h1>
        <div className="row space-around">
          {playerOne === null ? (
            <PlayerInput
              label="Player One"
              onSubmit={(player) => handleSubmit("playerOne", player)}
            />
          ) : (
            <PlayerPreview
              username={playerOne}
              label="Player One"
              onReset={() => handleReset("playerOne")}
            />
          )}
          {playerTwo === null ? (
            <PlayerInput
              label="Player Two"
              onSubmit={(player) => handleSubmit("playerTwo", player)}
            />
          ) : (
            <PlayerPreview
              username={playerTwo}
              label="Player Two"
              onReset={() => handleReset("playerTwo")}
            />
          )}
        </div>
        {playerOne && playerTwo && (
          <Link className="btn dark-btn btn-space"

            to={{

              pathname: "/battle/results",
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
            }}
          >Battle</Link>
        )}
      </div>
    </>
  );
}