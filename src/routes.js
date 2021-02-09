import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Plans } from './pages/Plans';
import { Checkout } from './pages/Checkout';


export const Routes = () => {
  return (
    <Router>
        {/* Create the Routes*/}
        <Switch>
          <Route path='/' exact component={Plans}/>
          <Route path='/checkout/:planId' exact component={Checkout}/>
          <Route path='/' render = {() => <div>404</div> }/>
        </Switch>
    </Router>
  );
}