import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Repositores from "./pages/Repositories";
import home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={home} />
        <Route path="/repositores" component={Repositores} />
      </Switch>
    </BrowserRouter>
  );
}
