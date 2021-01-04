import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import Creator from "../components/Creators";
import Login from "../components/Login";
class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Creators" component={Creator} />
        <Route exact path="/Login" component={Login} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
