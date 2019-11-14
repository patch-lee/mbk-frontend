import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../../../store/actions/index";
import logo from "../../../../logo.svg";

//css sass
import classes from "./notification.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Notification extends Component {
  render() {
    return (
      <div
        className={[
          classes.notification,
          classes[this.props.isNotificationOn]
        ].join(" ")}
      >
        <div className={classes.header}>Notification</div>
        <div className={classes.content}>
          <div className={classes.item}>
            You forgot to do something
          </div> <div className={classes.item}>
            And This too
          </div> <div className={classes.item}>
            Also this
          </div>
        </div>
      </div>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Notification));
