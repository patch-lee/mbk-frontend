import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

//css sass
import classes from "./role.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Role extends Component {
  render() {
    let testData = [
      { name: "Admin", description: "This is Admin" },
      { name: "Functional Admin", description: "This is Functional Admin" },
      { name: "Power User", description: "This is Power User" },
      { name: "User", description: "This is User" }
    ];
    let data = testData.map(res => {
      return (
        <tr>
          <td className={[classes.tr, classes.name].join(" ")}>{res.name}</td>
          <td className={[classes.tr, classes.description].join(" ")}>
            {res.description}
          </td>
          <td>
            <div className={[classes.tr, classes.manage].join(" ")}>
              <i
                className={[
                  icon.fas,
                  icon["fa-user"],
                  classes.icon,
                  classes.user
                ].join(" ")}
              />
              <i
                className={[
                  icon.fas,
                  icon["fa-pen"],
                  classes.icon,
                  classes.edit
                ].join(" ")}
              />
              <i
                className={[
                  icon.fas,
                  icon["fa-times"],
                  classes.icon,
                  classes.delete
                ].join(" ")}
              />
            </div>
          </td>
        </tr>
      );
    });
    return (
      <div className={[classes.role].join(" ")}>
        <table className={classes.table} >
          <tr>
            <th>Role Name</th>
            <th></th>
            <th>Manage</th>
          </tr>
          <tbody className={classes["table-content"]}>{data}</tbody>
        </table>
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
export default connect(mapStateToProps, mapDispatchToProps)(Role);
