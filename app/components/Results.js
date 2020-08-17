import React from "react";
import { battle } from "../utils/api";

export default function Result(state) {
  const { playerOne, playerTwo } = state;
    battle([playerOne, playerTwo]).then((players) => {
      console.log("data: ", players);
    })
  return (
    <div>
      Results
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
