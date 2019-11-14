import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

//css sass
import classes from "./user.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class User extends Component {
    render() {

    return (
      <div className={[classes.role].join(" ")}>
        -_-
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
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
