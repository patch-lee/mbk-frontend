import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import classes from "./link.scss";
import ico from "@fortawesome/fontawesome-free/css/all.css";
class Nav extends Component {
  render() {
    let { to,icon,name,open } = this.props;
    let exact = to==="/";
    return (
      <NavLink
        to={to}
        activeClassName={classes.active}
        exact={exact}
        className={[classes.item,classes[open]].join(" ")}
      >
        <i className={[ico.fas, ico[icon], classes.icon].join(" ")} />
        <div className={classes.text}>{name}</div>
      </NavLink>
    );
  }
}

export default withRouter(Nav);
