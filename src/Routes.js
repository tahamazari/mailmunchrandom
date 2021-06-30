import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import RandomPeople from "./randomPeople" 

const Routes = () => {
    return(
        <Switch>
          <Route exact path="/">
            <RandomPeople />
          </Route>
        </Switch>
    )
}

export default Routes