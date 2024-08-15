import React from "react";

import "../styles/CardLink.css";

function CardLink(props) {
  return (
    <div>
      <a className="card-link" href={props.url}>
        <button className="card-button">{props.name}</button>
      </a>
    </div>
  );
}

export default CardLink;
