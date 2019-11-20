import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Auxy from "../../../auxy/Auxy";
//css sass
import classes from "./overlay.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Overlay extends Component {
  clickHide = e => {
    console.log(e);

    e.preventDefault();
    if (e.currentTarget) {
      this.props.closeOverlay("hide");
    }
  };
  render() {
    let { show } = this.props;
    return (
      <Auxy>
        <div
          className={[classes.overlay, classes[show]].join(" ")}
          onClick={this.clickHide}
        ></div>
        <div
          className={[classes.box, classes[show]].join(" ")}
          style={{ width: this.props.width, height: this.props.height }}
        >
          <div className={classes.close} onClick={this.clickHide}>
            <i className={[icon.fas, icon["fa-times"]].join(" ")} />
          </div>
          {this.props.children}
        </div>
      </Auxy>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.appState.overlayToggle
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
