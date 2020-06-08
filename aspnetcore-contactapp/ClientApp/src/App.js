import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import LandingPage from './components/villages/LandingPage';
import  Navbar  from './components/sections/Navbar';
import HomePage from './components/villages/HomePage';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      // <Layout>
      //   <Route exact path='/' component={Home} />
      //   <Route path='/counter' component={Counter} />
      //   <AuthorizeRoute path='/fetch-data' component={FetchData} />
      //   <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      // </Layout>
      <div>
        <Navbar links={["about", "Pro version"]}/>
        <Route exact path='/' component={LandingPage} />
        <Route  path='/home' component={HomePage} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </div>
    );
  }
}
