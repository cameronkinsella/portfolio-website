import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';
import NotFound from '../screens/404';

const Main = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route path={'*'} component={NotFound}/>
    </Switch>
  );
};

export default Main;