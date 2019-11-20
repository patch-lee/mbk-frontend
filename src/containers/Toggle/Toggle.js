import React, { Component } from "react";

//css sass
import classes from "./toggle.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

function Toggle(props) {

  return (
    <div className={[classes.toggle,classes[props.status]].join(" ")} onClick={props.onClick}>
      <div className={[classes.button,classes[props.status]].join(" ")}/>
    </div>
  );
}

export default Toggle;
