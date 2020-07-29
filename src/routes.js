import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Character from './pages/Character';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/character/:id" component={Character}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;