import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import logo from "../../../logo.svg";

import Notification from "./Notification/Notification";

//css sass
import classes from "./header.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Header extends Component {
  state = {
    isNotificationOn: "no"
  };
  clickToggleNotification = () => {
    let toggle = this.state.isNotificationOn === "yes" ? "no" : "yes";
    this.setState({ isNotificationOn: toggle });
  };
  render() {
    let location;
    let { toggle } = this.props;
    if (this.props.location.pathname === "/") {
      location = "Home";
    } else {
      let path = this.props.location.pathname;
      location = path.charAt(1).toUpperCase() + path.slice(2, path.length);
    }
    return (
      <header className={classes.header}>
        <div className={classes.logo}>LOGO</div>

        <div className={[classes.title].join(" ")}>{location}</div>
        <div className={classes.profile}>
          <div
            className={[classes.notification,classes[this.state.isNotificationOn]].join(" ")}
            onClick={this.clickToggleNotification}
          >
            <div className={classes.badge}>5</div>
            <i
              className={[icon.fas, icon["fa-bell"], classes.bell].join(" ")}
            />
          </div>
          <div className={classes.avatar}>
            <img src={logo} className={classes.img} alt="avatar"></img>
            <div className={classes.name}>name</div>
          </div>
        </div>
        <Notification isNotificationOn={this.state.isNotificationOn} />
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.appState.navToggle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openNav: () => dispatch(actions.openNav()),
    closeNav: () => dispatch(actions.closeNav())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
