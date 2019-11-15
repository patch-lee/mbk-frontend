import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";



//css sass
import classes from "./overlay.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Overlay extends Component {
  clickHide = ()=>{
    this.props.closeOverlay()
  }
  render() {
    let {toggle} = this.props
    return (
      <div className={[classes.overlay,classes[toggle]].join(" ")} onClick={this.clickHide} >
        <div className={classes.box}>
          <div className={classes.close} onClick={this.clickHide}>
            <i className={[icon.fas, icon["fa-times"]].join(" ")} />
          </div>
         {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.appState.overlayToggle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeOverlay: () => dispatch(actions.closeOverlay())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
