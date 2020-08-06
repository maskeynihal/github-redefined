import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as Pages from 'View';

/**
 * App routes.
 */
export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route exact path="/user" component={Pages.UserProfile} />
    </Switch>
  );
}
