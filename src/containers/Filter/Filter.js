import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

//css sass
import classes from "./filter.scss";
import icon from "@fortawesome/fontawesome-free/css/all.css";

class Filter extends Component {
  render() {
    let { filter } = this.props;
    let data = filter.map(res => {
      if (res.type === "select") {
        let option = res.data.map(data => {
          return <option key={data}>{data}</option>;
        });
        return (
          <div className={classes.form} key={res.lebel}>
            {res.label}
            <select>{option}</select>
          </div>
        );
      } else {
        return (
          <div className={classes.form} key={res.lebel}>
            {res.label}
            <input type="text" />
          </div>
        );
      }
    });
    return (
      <div
        className={[classes.filter, classes[this.props.isFilterOn]].join(" ")}
      >
        <div className={classes.header}>
          Filter Condition
          <i
            className={[icon.fas, icon["fa-times"], classes.x].join(" ")}
            onClick={this.props.clickOffFilter}
          />
        </div>
        <div className={classes.content}>
          {data}
          <div className={classes.button}>
            <button className={classes.search}>Search</button>
            <button className={classes.cancel}>Cancel</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
