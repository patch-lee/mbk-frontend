import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

import Overlay from "../../../Layout/Overlay/Overlay";
import Input from "../../../Input/Input";
import TextArea from "../../../TextArea/TextArea";
import Toggle from "../../../Toggle/Toggle";
//css sass
import classes from "./addRole.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class AddRoles extends Component {
  render() {
    let data = [
      "Setup Data",
      "Assignment",
      "Result",
      "Appraisal",
      "Report",
      "DashBoard"
    ];
    let permission = data.map(res => {
      return (
        <tr>
          <td>{res}</td>
          <td>
            <input type="checkbox" name={res+"view"} value="Car" />
          </td>
          <td>
            <input type="checkbox" name={res+"add"} value="Car" />
          </td>
          <td>
            <input type="checkbox" name="vehicle2" value="Car" />
          </td>
          <td>
            <input type="checkbox" name="vehicle2" value="Car" />
          </td>
          <td>
            <input type="checkbox" name="vehicle2" value="Car" />
          </td>
          <td>
            <input type="checkbox" name="vehicle2" value="Car" />
          </td>
        </tr>
      );
    });
    return (
      <Overlay
        show={this.props.show}
        closeOverlay={this.props.closeOverlay}
        width={"750px"}
        height={"500px"}
      >
        <div className={classes.header}>Add Role</div>
        <div className={classes.content}>
          <div className={classes.detail}>
            <div className={classes.form}>
              <Input
                name={"Role name"}
                width={"100%"}
                display={"inline-block"}
              />
            </div>
            <div className={classes.form}>
              <TextArea name={"Description"} />
            </div>
          </div>
          <div className={classes.permission}>
            <div>Permission</div>
            <table>
              <table className={classes.permission}>
                <thead>
                  <tr>
                    <th className={classes.page}>Page</th>
                    <th className={classes.check}>View</th>
                    <th className={classes.check}>Add</th>
                    <th className={classes.check}>Edit</th>
                    <th className={classes.check}>Delete</th>
                    <th className={classes.check}>Corperate</th>
                    <th className={classes.check}>Individual</th>
                  </tr>
                </thead>

                <tbody className={classes["table-content"]}>{permission}</tbody>
              </table>
            </table>
          </div>
        </div>
      </Overlay>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setOverlay: content => actions.setOverlay(content)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddRoles);
