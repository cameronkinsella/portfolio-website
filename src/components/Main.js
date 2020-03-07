import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';
import Projects from '../screens/Projects';
import NotFound from '../screens/404';

const Main = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/projects'} component={Projects}/>
      <Route path={'*'} component={NotFound}/>
    </Switch>
  );
};

export default Main;