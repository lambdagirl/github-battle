import React, { useState } from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";


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
export default function Battle(){
    const [playerOne,setPlayerOne] = useState(null)
    const [playerTwo, setPlayerTwo] = useState(null)
    const handleSubmit = (id, player) => id === 'playerOne'
    ? setPlayerOne(player)
    : setPlayerTwo(player)
return (
  <>
    <Instructions />
    <div className="players-container">
      <h1 className="center-text header-lg"> Players</h1>
      <div className="row">
        {playerOne === null && (
          <PlayerInput
            label="Player 1"
            onSubmit={(player) => handleSubmit("playerOne", player)}
          />
        )}
        {playerTwo === null && (
          <PlayerInput
            label="Player 2"
            onSubmit={(player) => handleSubmit("playerTwo", player)}
          />
        )}

        
      </div>
    </div>
  </>
);
}