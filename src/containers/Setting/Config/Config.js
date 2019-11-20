import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

//css sass
import classes from "./config.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Config extends Component {
    render() {

    return (
      <div className={[classes.user].join(" ")}>
        UmU
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
export default connect(mapStateToProps, mapDispatchToProps)(Config);
