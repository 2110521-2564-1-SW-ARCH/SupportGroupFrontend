import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import ProtectedRoute from './protected-route';
// import PrivateRoute from './private-route';

import * as ROUTES from './routes-name';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.ROUTE_PROFILE} />
    </Switch>
  );
};

export default Routes;
