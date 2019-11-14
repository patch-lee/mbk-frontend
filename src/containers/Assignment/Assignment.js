import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Filter from "../Filter/Filter";
import Button from "../Button/Button";
//css sass
import classes from "./assignment.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Assignment extends Component {
  state = {
    isFilterOn: "off"
  };
  clickTogggleFilter = () => {
    let toggle = this.state.isFilterOn === "on" ? "off" : "on";
    this.setState({ isFilterOn: toggle });
  };
  clickOffFilter = () => {
    this.setState({ isFilterOn: "off" });
  };

  render() {
    let { toggle } = this.props;
    let filter = [
      { label: "Appraisal Type", type: "select", data: [1, 2, 3, 4,5] },
      { label: "Level Emp", type: "select", data: [1, 2, 3, 4] },
      { label: "Level Org", type: "select", data: [1, 2, 3, 4] },
      { label: "Organization", type: "select", data: [1, 2, 3, 4] },
      { label: " Employee Name", type: "input", data: null },
      { label: " Position", type: "input", data: null },
      { label: "Form", type: "select", data: [1, 2, 3, 4] },
      { label: "Year", type: "select", data: [1, 2, 3, 4] },
      { label: "Assign Frequency", type: "select", data: [1, 2, 3, 4] },
      { label: "Period", type: "select", data: [1, 2, 3, 4] },
      { label: "Status", type: "select", data: [1, 2, 3, 4] },


    ];
    return (
      <div className={[classes.assignment, classes[toggle]].join(" ")}>
        <div className={classes.tool}>
          <Button icon="fa-filter" onClick={this.clickTogggleFilter}>
            Filter
          </Button>
          <Button icon="fa-upload" onClick={this.clickTogggleFilter}>
            Export
          </Button>
          <Button icon="fa-download" onClick={this.clickTogggleFilter}>
            Import
          </Button>
          <Button icon="fa-search" onClick={this.clickTogggleFilter}>
            Search
          </Button>
        </div>
        <Filter
          clickOffFilter={this.clickOffFilter}
          isFilterOn={this.state.isFilterOn}
          filter={filter}
        />
        <div className={classes.data}>
          <div className={classes.empty}>Please Filter Data</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Assignment);
