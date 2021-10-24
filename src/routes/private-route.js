/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAuthToken } from '../utils/storage';
import * as routeName from './routes-name';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getAuthToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: routeName.ROUTE_SIGNIN,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
