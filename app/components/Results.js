import React from "react";
import { battle } from "../utils/api";
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUser,
  FaUserFriends,
  FaCode,
} from "react-icons/fa";

function ProfileList({profile}){
    return (
    <ul className="card-list">
      <li>
        <FaUser color="rgb(239, 115, 115)" size={22} />
        {profile.name}
      </li>
      {profile.location && (
        <li>
          <FaCompass color="rgb(144, 115, 255)" size={22} />
          {profile.location}
        </li>
      )}
      {profile.company && (
        <li>
          <FaBriefcase color="#795548" size={22} />
          {profile.company}
        </li>
      )}
      <li>
        <FaUsers color="rgb(129, 195, 245)" size={22} />
        {profile.followers.toLocaleString()} followers
      </li>
      <li>
        <FaUserFriends color="rgb(64, 183, 95)" size={22} />
        {profile.following.toLocaleString()} following
      </li>
    </ul>)
}

function BattleReducer(state,action){
    if (action.type === 'success'){
        return ({
            winner: action.winner ,
            loser: action.loser,
            error: null,
            loading: false
        })
    } else if (action.type === 'error'){
        return {
            ...state,
            error: action.message,
            loading: false
        } 
    } else {
        throw new Error(`That action type isn't supported`)
    }
}

export default function Result(location) {
    const { playerOne, playerTwo } = location
    const [state, dispatch] = React.useReducer(BattleReducer, {
        winner: null,
        loser: null,
        error: null,
        loading: true
    })
    React.useEffect(()=>{
        battle([playerOne, playerTwo])
        .then((players) => dispatch({type:'success', winner: players[0], loser: players[1]}))
        .catch(({message}) => dispatch({type:'error', message}))
    },[playerOne, playerTwo])

    const {winner,loser,error,loading} = state

    if (loading === true){
        return <p>Loading</p>
    }

    if (error) {
        return (
            <p className='center-text error'>{error}</p>
        )
    }
  return (
    <div className="grid space-aroung container-sm">
      <div className="card bg-light">
        <h4 className="header-lg center-text">
          {winner.score === loser.score ? "Tie" : "Winner"}
        </h4>
        <img
          className="avatar"
          src={winner.profile.avatar_url}
          alt={`avata for ${winner.profile.login}`}
        />
        <h2>
          <a className="link center-text" href={winner.profile.html_url}>
            {winner.profile.login}
          </a>
        </h2>

        <ProfileList profile={winner.profile} />
      </div>
      <div className="card bg-light">
        <h4 className="header-lg center-text">
          {winner.score === loser.score ? "Tie" : "Loser"}
        </h4>
        <img
          className="avatar"
          src={loser.profile.avatar_url}
          alt={`avata for ${loser.profile.login}`}
        />
        <h2>
          <a className="link" href={loser.profile.html_url}>
            {loser.profile.login}
          </a>
        </h2>
        <ProfileList profile={loser.profile} />
      </div>
    </div>
  );
}
