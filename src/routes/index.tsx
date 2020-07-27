import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import Home from '../pages/Home';
import ValidPath from '../pages/ValidPath';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" Component={Home} />
      <Route path="/valid" Component={ValidPath} />
      <Route path="*" Component={NotFound} />
    </Switch>
  );
}
