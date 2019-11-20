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
    animation: "in",
    active: ["active", "", ""],
    content: <Roles />
  };
  clickTab = tab => {
    let active, content;
    switch (tab) {
      case "Role":
        content = <Roles />;
        active = ["active", "", ""];
        break;
      case "User":
        content = <User />;
        active = ["", "active", ""];

        break;
      case "Config":
        content = <Config />;
        active = ["", "", "active"];

        break;
      default:
        break;
    }
    this.setState({ animation: "out"})
      setTimeout(()=>{this.setState({animation: "in", active, content})}, 0.5);
  };

  render() {
    let { animation, content, active } = this.state;
    let { toggle } = this.props;
    return (
      <div className={[classes.setting, classes[toggle]].join(" ")}>
        <div className={classes.tab}>
          <div
            className={[classes.role, classes[active[0]],classes.tabContent].join(" ")}
            onClick={this.clickTab.bind(this, "Role")}
          >
            <i className={[icon.fas, icon["fa-user-tag"]].join(" ")} />
            Role
          </div>
          <div
            className={[classes.user, classes[active[1]],classes.tabContent].join(" ")}
            onClick={this.clickTab.bind(this, "User")}
          >
            <i className={[icon.fas, icon["fa-user"]].join(" ")} />
            User
          </div>
          <div
            className={[classes.config, classes[active[2]],classes.tabContent].join(" ")}
            onClick={this.clickTab.bind(this, "Config")}
          >
            <i className={[icon.fas, icon["fa-clipboard-check"]].join(" ")} />
            Configuration
          </div>
        </div>

        <div className={[classes["content-box"], classes[animation]].join(" ")}>
          <div className={[classes["content"], classes[animation]].join(" ")}>
            {content}
          </div>
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
