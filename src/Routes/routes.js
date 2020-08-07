import React from 'react';

import { Switch, Route } from 'react-router-dom';
import * as Pages from 'View';

/**
 * App routes.
 */
export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route exact path="/user/:username" component={Pages.UserProfile} />
    </Switch>
  );
}
