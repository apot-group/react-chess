import {React} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Game, Login, DashBoard } from './views';
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
         <PrivateRoute path='/game' authed={auth} component={Game}/>
         <Route path='/dashboard' component={DashBoard}/>
         {/* <PrivateRoute path='/' authed={auth} component={Game}/> */}
      </Switch>
    );
  };