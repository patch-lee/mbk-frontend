import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

import Overlay from "../../../Overlay/Overlay";

//css sass
import classes from "./addRole.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Roles extends Component {
  render() {
    return (
     <Overlay/>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Roles);
