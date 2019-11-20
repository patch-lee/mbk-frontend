import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

import Toggle from "../../../Toggle/Toggle";

//css sass
import classes from "./role.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Role extends Component {
  state = {
    toggle: "off"
  };
  clickToggle=()=>{
    let toggle = this.state.toggle==="off"?"on":"off";
this.setState({toggle})
  }
  render() {
    let { name, description } = this.props;
    let { toggle } = this.state;
    return (
      <tr className={classes.role}>
        <td className={[classes.content, classes.name].join(" ")}>{name}</td>
        <td className={[classes.content, classes.description].join(" ")}>
          {description}
        </td>
        <td className={[classes.content, classes.manage].join(" ")}>
          <div className={[classes.icon, classes.user].join(" ")}>
            <i className={[icon.fas, icon["fa-users"]].join(" ")} />
            List
          </div>
          <div className={[classes.icon, classes.edit].join(" ")}>
            <i className={[icon.fas, icon["fa-pen"]].join(" ")} />
            Edit
          </div>
          <div className={[classes.toggle].join(" ")}>
            <Toggle onClick={this.clickToggle} status={toggle}/>
          </div>
        </td>
        <td className={[classes.content, classes.delete].join(" ")}>
          <i className={[icon.fas, icon["fa-times"]].join(" ")} />
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Role);
