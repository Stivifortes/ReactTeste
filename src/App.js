import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Plans } from './pages/Plans';
import { Checkout } from './pages/Checkout';

function App() {
  return (
    <Router>
        {/* Create the Routes*/}
        <Switch>
          <Route path='/' exact component={Plans}/>
          <Route path='/checkout' exact component={Checkout}/>
          <Route path='/' render = {() => <div>404</div> }/>
        </Switch>
    </Router>
  );
}

export default App;
