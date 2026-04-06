import React from "react";
import "./Button.css"

function Button(props) {
  return (
    <button className="btn" onClick={props.click}>
      {props.label}
    </button>
  );
}

export default Button;