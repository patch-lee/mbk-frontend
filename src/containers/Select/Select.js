import React from "react";

//css sass
import classes from "./select.scss";

function Select(props) {
  
  let { data,lebel } = props;

  let option = data.map(res => {
    return <option key={res}>{res}</option>;
  });

  return (
    <div className={classes.select} key={lebel}>
      <div className={classes.name}>{lebel}</div>
      <select className={classes.form}>{option}</select>
    </div>
  );
}
export default Select;
