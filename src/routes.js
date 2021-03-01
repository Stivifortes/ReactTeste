import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Plans } from './pages/Plans';
import { Checkout } from './pages/Checkout';
import Tenant from './pages/Tenant';
import Contact from './pages/Contact';
import Checks from './pages/Checks';


export const Routes = () => {
  return (
    <Router>
        {/* Create the Routes*/}
        <Switch>
          <Route path='/' exact component={Plans}/>
          <Route path='/checkout/:planId' exact component={Checkout}/>
          <Route path='/tenant' exact component={Tenant}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/check' exact component={Checks}/>
          <Route path='/' render = {() => <div>404</div> }/>
        </Switch>
    </Router>
  );
}