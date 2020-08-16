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
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="player-label">{label.username}
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
          <h1 className="text-center "> Players</h1>
          <div className="row space-around">
            <PlayerInput
              label="player one"
              onSubmit={(player) => handleSubmit("playerOne", player)}
            />
          </div>
        </div>
      </>
    );
}