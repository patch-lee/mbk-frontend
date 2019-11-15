import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";


//css sass
import classes from "./role.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Role extends Component {
  render() {
    let { name, description } = this.props;
    return (
      <tr className={classes.role}>
        <td className={[classes.tr, classes.name].join(" ")}>{name}</td>
        <td className={[classes.tr, classes.description].join(" ")}>
          {description}
        </td>
        <td>
          <div className={[classes.tr, classes.manage].join(" ")}>
            <div className={[classes.icon, classes.user].join(" ")}>
              <i className={[icon.fas, icon["fa-users"]].join(" ")} />
              List
            </div>
            <div className={[classes.icon, classes.edit].join(" ")}>
              <i className={[icon.fas, icon["fa-pen"]].join(" ")} />
              Edit
            </div>
            <div className={[classes.delete].join(" ")}>
              <i className={[icon.fas, icon["fa-times"]].join(" ")} />
            </div>
          </div>
        </td>
      </tr>
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
export default connect(mapStateToProps, mapDispatchToProps)(Role);
