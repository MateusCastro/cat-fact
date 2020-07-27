import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../layouts/default';

interface Props {
  Component: React.FC;
  path: string;
  exact?: boolean;
}

const RouteWrapper: React.FC<Props> = ({ Component, path, exact, ...rest }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (
        <Layout>
          <Component {...rest} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
