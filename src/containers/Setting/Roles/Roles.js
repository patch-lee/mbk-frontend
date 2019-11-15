import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import Role from "./Role/Role";
import AddRole from "./AddRole/AddRole";

//css sass
import classes from "./roles.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Roles extends Component {
  render() {
    let testData = [
      { name: "Admin", description: "This is Admin" },
      { name: "Functional Admin", description: "This is Functional Admin" },
      { name: "Power User", description: "This is Power User" },
      { name: "User", description: "This is User" }
    ];
    let data = testData.map(res => {
      return <Role name={res.name} description={res.description} key={res.name} />;
    });
    return (
      <div className={[classes.roles].join(" ")}>
        Role Management
        <div className={classes["add-role"]} onClick={this.props.openOverlay}>
          {" "}
          <i className={[icon.fas, icon["fa-plus"]].join(" ")} />
          Add Role
        </div>
        <div></div>
        <table className={classes.table}>
          <tr>
            <th>Role Name</th>
            <th>Description</th>
            <th className={classes.manage}>Manage</th>
          </tr>
          <tbody className={classes["table-content"]}>{data}</tbody>
        </table>
        <AddRole />
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
    openOverlay: () => dispatch(actions.openOverlay())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Roles);
