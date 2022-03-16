import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './__components';

// import Loadable from 'react-loadable';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Login'));
const ResetPassword = React.lazy(() => import('./views/Login/ResetPassword'));
const InputRP = React.lazy(() => import('./views/Login/InputRP'));
const PasswordChanged = React.lazy(() => import('./views/Login/PasswordChanged'));
const FinishRP = React.lazy(() => import('./views/Login/FinishRP'));
const Main = React.lazy(() => import('./views/_User/Main'));
const PublicUser = React.lazy(() => import('./containers/PublicUserLayout/Layout'));
// const About = React.lazy(() => import('./views/About'));

class App extends Component {
  render() {
    // console.log('==========App: render()=====================')
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            <Route exact path="/login/ResetPassword" name="Reset Password Page" render={props => <ResetPassword {...props} />} />
            <Route exact path="/login/FinishRP" name="Finish Reset Password Page" render={props => <FinishRP {...props} />} />
            <Route exact path="/login/InputRP" name="Insert New Password Page" render={props => <InputRP {...props} />} />
            <Route exact path="/login/PasswordChanged" name="Password Changed" render={props => <PasswordChanged {...props} />} />
            <Route exact path="/main" name="Main Page" render={props => <Main {...props} />} />
            <Route exact path="/PublicUser" name="PublicUser Page" render={props => <PublicUser {...props} />} />
            {/* <Route exact path="/about" name="About" render={props => <About {...props} />} /> */}
            <PrivateRoute path="/" component={DefaultLayout} default='/login' />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}
export default App;