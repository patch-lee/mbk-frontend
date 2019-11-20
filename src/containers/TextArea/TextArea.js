import React, { Component } from "react";

//css sass
import classes from "./textArea.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

function TextArea(props) {
  return (
    <div className={[classes.textarea, classes[props.className]].join(" ")}>
      <div className={classes.name}>{props.name}</div>
      <textarea cols="100" row="5" className={[classes.form]} />
    </div>
  );
}

export default TextArea;
