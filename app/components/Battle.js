import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";


export default function Battle(){
    return (
      <div className="battle-container">
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