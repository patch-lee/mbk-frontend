import React from "react";
//css sass
import classes from "./button.scss";
import ico from "@fortawesome/fontawesome-free/css/all.css";

function Button(props) {
  return (
    <button className={[classes.button,props.className].join(" ")} onClick={props.onClick}>
      <i className={[ico.fas, ico[props.icon]].join(" ")} />
      {props.children}
    </button>
  );
}

export default Button;
