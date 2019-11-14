import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import Assignment from "./containers/Assignment/Assignment";

import Setting from "./containers/Setting/Setting";
import classes from "./App.scss";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route exact path="/" />
          <Route path="/setupdata" />
          <Route path="/assignment" component={Assignment} />
          <Route path="/result" />
          <Route path="/appraisal" />
          <Route path="/report" />
          <Route path="/dashboard" />
          <Route path="/settings" component={Setting} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
