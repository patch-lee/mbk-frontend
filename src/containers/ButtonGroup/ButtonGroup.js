import React from "react";

//css sass
import classes from "./role.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

function Icon(props) {
  return (
    <div className={[classes.buttonGroup].join(" ")}>
      <i
        className={[icon.fas, icon["fa-user"], classes.icon, classes.user].join(
          " "
        )}
      />
      <i
        className={[icon.fas, icon["fa-pen"], classes.icon, classes.edit].join(
          " "
        )}
      />
      <i
        className={[
          icon.fas,
          icon["fa-times"],
          classes.icon,
          classes.delete
        ].join(" ")}
      />
    </div>
  );
}

export default Icon;
