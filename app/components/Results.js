import React from "react";
import { battle } from "../utils/api";
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
import Card from "./Card";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import queryString from "query-string";
import Tooltip from './Tooltip'
function ProfileList({ profile }) {
  return (
    <ul className="card-list">
      <li>
        <Tooltip text="github username">
          <FaUser color="rgb(239, 115, 115)" size={22} />
          {profile.name}
        </Tooltip>
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
    </ul>
  );
}

function BattleReducer(state, action) {
  if (action.type === "success") {
    return {
      winner: action.winner,
      loser: action.loser,
      error: null,
      loading: false,
    };
  } else if (action.type === "error") {
    return {
      ...state,
      error: action.message,
      loading: false,
    };
  } else {
    throw new Error(`That action type isn't supported`);
  }
}

export default function Result({location}) {
    const { playerOne, playerTwo } = queryString.parse(location.search);
    const [state, dispatch] = React.useReducer(BattleReducer, {
        winner: null,
        loser: null,
        error: null,
        loading: true,
    });
    React.useEffect(() => {
        battle([playerOne, playerTwo])
        .then((players) =>
            dispatch({ type: "success", winner: players[0], loser: players[1] })
        )
        .catch(({ message }) => dispatch({ type: "error", message }));
    }, [playerOne, playerTwo]);

    const { winner, loser, error, loading } = state;

    if (loading === true) {
        return <Loading />;
    }
    if (error) {
        return <p className="center-text error">{error}</p>;
    }
    return (
        <>
        <div className="grid space-aroung container-sm">
            <Card
            header={winner.score === loser.score ? "Tie" : "Winner"}
            subheader={`score: ` + winner.score}
            avatar={winner.profile.avatar_url}
            href={winner.profile.html_url}
            name={winner.profile.login}
            >
            <ProfileList profile={winner.profile} />
            </Card>
            <Card
            header={winner.score === loser.score ? "Tie" : "Winner"}
            subheader={`score: ` + loser.score}
            avatar={loser.profile.avatar_url}
            href={loser.profile.html_url}
            name={loser.profile.login}
            >
            <ProfileList profile={loser.profile} />
            </Card>
        </div>
        <Link to="/" className="btn btn-dark btn-space">
            Reset
        </Link>
        </>
    )
}
