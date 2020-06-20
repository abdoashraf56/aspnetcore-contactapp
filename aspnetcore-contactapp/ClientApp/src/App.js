import React, { Component } from 'react';
import { Route } from 'react-router';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import LandingPage from './components/villages/LandingPage';
import  Navbar  from './components/sections/Navbar';
import HomePage from './components/villages/HomePage';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return(
      <div>
        <Navbar links={["about", "Pro version"]}/>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={HomePage} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </div>
    );
  }
}
