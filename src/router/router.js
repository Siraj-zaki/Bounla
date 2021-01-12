import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import Creator from "../components/Creators";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import TermsOfService from "../components/TermsOfService";
import Privacy from "../components/Privacy";
import Amateurs from "../components/Amateurs";
import Amatrices from "../components/Amatrices";
import Animation from "../components/Animation";
import Artist from "../components/Artist";
import Autres from "../components/Autres";
import Designer from "../components/Designer";
import Developer from "../components/Developer";
import Drawing from "../components/Drawing";
import Photography from "../components/Photography";
import Modèles from "../components/Modèles";
import Podcast from "../components/Podcast";
import Video from "../components/Video";
import Writing from "../components/Writing"
import UserPage from "../components/UserPage"
import ShowUser from "../components/ShowUser"
class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Creators" component={Creator} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/TermsOfService" component={TermsOfService} />
        <Route exact path="/Privacy" component={Privacy} />
        <Route exact path="/Amateurs" component={Amateurs} />
        <Route exact path="/Amatrices" component={Amatrices} />
        <Route exact path="/Animation" component={Animation} />
        <Route exact path="/Artist" component={Artist} />
        <Route exact path="/Autres" component={Autres} />
        <Route exact path="/Designer" component={Designer} />
        <Route exact path="/Developer" component={Developer} />
        <Route exact path="/Drawing" component={Drawing} />
        <Route exact path="/Modèles" component={Modèles} />
        <Route exact path="/Photography" component={Photography} />
        <Route exact path="/Podcast" component={Podcast} />
        <Route exact path="/Video and Flim" component={Video} />
        <Route exact path="/Writing" component={Writing} />
        <Route exact path="/UserPage" component={UserPage} />
        <Route exact path="/ShowUser" component={ShowUser} />
      </React.Fragment>
    );
  }
}
export default ReactRouter;
