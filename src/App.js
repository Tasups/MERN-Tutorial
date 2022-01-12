import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation.js';
import Auth from './user/pages/Auth.js';
import Users from './user/pages/Users.js';
import NewPlace from './places/pages/NewPlace.js';
import UserPlaces from './places/pages/UserPlaces.js';
import UpdatePlace from './places/pages/UpdatePlace.js';

const App = () => {
  return(
    <Router>
      <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/:userId/places" exact>
              <UserPlaces />
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Route path="/places/:placeId" exact>
              <UpdatePlace />
            </Route>
            <Route path="/auth" exact>
              <Auth />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
    </Router>
      );
}

export default App;
