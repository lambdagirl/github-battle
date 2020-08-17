import React from "react";

export default function Result(state){
    return (
      <div>
        Results
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
}
