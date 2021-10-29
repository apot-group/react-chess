import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './views/Login'
import DashBoard from './views/DashBoard'
import Home from './views/Home'
import Game from './views/game/Game'
import Register from './views/Register';
import isAuth from "./admin/auth";



function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export const Routes = () => {
    const auth = isAuth()
    return (
      <Switch>
         <Route path='/login' component={Login} />
         <Route path='/register' component={Register}/>
         <Route path='/dashboard' component={DashBoard}/>
         <Route path='/game'  component={Game}/>
         <PrivateRoute authed={auth} path='/' component={Home}/>
      </Switch>
    );
  };