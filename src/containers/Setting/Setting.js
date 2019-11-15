import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Roles from "./Roles/Roles";
import User from "./User/User";
import Config from "./Config/Config";

//css sass
import classes from "./setting.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Setting extends Component {
  state = {
    tab: "role"
  };
  clickTab = tab => {
    this.setState({ tab });
  };

  render() {
    let { tab } = this.state;
    let { toggle } = this.props;
    let content;
    let activeRole = "";
    let activeUser = "";
    let activeConfig = "";
    //start render selected tab
    switch (tab) {
      case "role":
        content = <Roles />;

        activeRole = "active";
        activeUser = "";
        activeConfig = "";
        break;
      case "user":
        content = <User />;
        activeRole = "";
        activeUser = "active";
        activeConfig = "";
        break;
      case "config":
        content = <Config />;
        activeRole = "";
        activeUser = "";
        activeConfig = "active";
        break;
      default:
        break;
    }
    //end render selected tab

    return (
      <div className={[classes.setting, classes[toggle]].join(" ")}>
        <div className={classes.tab}>
          <div
            className={[classes.role,classes[activeRole]].join(" ")}
            onClick={this.clickTab.bind(this, "role")}
          >
            <i className={[icon.fas, icon["fa-user-tag"]].join(" ")} />
            Role
          </div>
          <div
            className={[classes.user,classes[activeUser]].join(" ")}
            onClick={this.clickTab.bind(this, "user")}
          >
            <i className={[icon.fas, icon["fa-user"]].join(" ")} />
            User
          </div>
          <div
            className={[classes.config,classes[activeConfig]].join(" ")}
            onClick={this.clickTab.bind(this, "config")}
          >
            <i className={[icon.fas, icon["fa-clipboard-check"]].join(" ")} />
            Configuration
          </div>
        </div>
        <div className={[classes.content, classes[tab]].join(" ")}>
          {content}
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
