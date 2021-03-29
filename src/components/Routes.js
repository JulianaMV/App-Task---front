import React from  'react'

import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Login   from  '../pages/Login'
import Register   from  '../pages/Register'
import Reset  from  '../pages//Reset'
import Home   from  '../pages/Home'
import ForgotPassword from '../pages/ForgotPassword'
import NotFound   from  './NotFound'

import {isAuthenticated} from '../services/auth'
import {history} from '../history'
import Tasks from '../pages/tasks/Tasks'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );

const Routes = () => {

    return(
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register"component={Register} />
            <Route exact path="/reset"component={Reset} />
            <Route exact path="/forgotpassword"component={ForgotPassword} />
            <PrivateRoute exact path="/tasks"component={Tasks} />
            <Route exact path="/"component={Home} />
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;