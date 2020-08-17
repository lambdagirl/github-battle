import React from "react";
import { battle } from "../utils/api";

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
            <p>{error}</p>
        )
    }
  return (
    <div>
      Results
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
