import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Films from "./components/Films";
import SingleFilm from "./components/SingleFilm";
import People from "./components/People";
import SinglePerson from "./components/SinglePerson";

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route exact path="/films/:filmid">
            <SingleFilm />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/people/:personid">
            <SinglePerson />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
