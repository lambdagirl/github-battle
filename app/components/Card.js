import React from "react";

function Card({ header,subheader, avatar,href, name, children}) {
  return (
    <div>
      <h4 className="header-lg center-text">{header}</h4>
      <img src={avatar} className="avatar" alt={`avatar for ${name}`} />
      {subheader && <h4 className="center-text">{subheader}</h4>}
      <h2 className="center-text">
        <a className="link" href={href}>
          {name}
        </a>
      </h2>
      {children}
    </div>
  );
}