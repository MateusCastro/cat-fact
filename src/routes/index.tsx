import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import DefaultLayout from "../layouts/default";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={(_) => (
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
