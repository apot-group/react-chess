import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from './views';


export const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact>
        </Route>
        <Route path="/login" component={Login}></Route>

      </Switch>
    );
  };