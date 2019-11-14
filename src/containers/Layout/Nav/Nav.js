import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import Link from "./Link/Link";
import classes from "./Nav.scss";
import Auxy from "../../../auxy/Auxy";
import icon from "@fortawesome/fontawesome-free/css/all.css";
class Nav extends Component {
  clickMenu = () => {
    if (this.props.toggle === "close") {
      this.props.openNav();
    } else {
      this.props.closeNav();
    }
  };
  render() {
    let { toggle } = this.props;
    return (
      <Auxy>
        <div className={[classes.sidenav, classes[toggle]].join(" ")}>
          <i
            className={[
              icon.fas,
              icon["fa-bars"],
              classes.menu,
              classes[toggle],
              classes.icon,
              classes.item
            ].join(" ")}
            onClick={this.clickMenu}
          />
          <Link to="/" icon="fa-home" name="Home" open={toggle} />
          <Link
            to="/setupdata"
            icon="fa-home"
            name="Setup Data"
            open={toggle}
          />
          <Link
            to="/assignment"
            icon="fa-file-alt"
            name="Assignment"
            open={toggle}
          />
          <Link to="/result" icon="fa-home" name="Result" open={toggle} />
          <Link to="/appraisal" icon="fa-home" name="Appraisal" open={toggle} />
          <Link to="/report" icon="fa-home" name="Report" open={toggle} />
          <Link to="/dashboard" icon="fa-home" name="Dashboard" open={toggle} />
          <Link to="/settings" icon="fa-cogs" name="Setting" open={toggle} />
        </div>
      </Auxy>
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
    openNav: () => dispatch(actions.openNav()),
    closeNav: () => dispatch(actions.closeNav())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
