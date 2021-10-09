import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login, Game } from './views';


export const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/game" component={Game}></Route>


      </Switch>
    );
  };