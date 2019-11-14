import React, { Component } from "react";
import Auxy from "../../auxy/Auxy";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";

import classes from "./layout.scss"
const Layout = (props) =>{
  return (
    <Auxy>
      <Nav />
      <Header />
      <main className={classes.Content}>{props.children}</main>
    </Auxy>
  );
}

export default Layout;
