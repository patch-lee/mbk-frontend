import React, { Component } from "react";

//css sass
import classes from "./input.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

function Input(props) {

  return (
    <div className={[classes.input, classes[props.className]].join(" ")} style={{display:props.display}} >
      <div className={classes.name}>{props.name}</div>
      <input type="text" className={[classes.form]} style={{width:props.width}}/>
    </div>
  );
}

export default Input;
