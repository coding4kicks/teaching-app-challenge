import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Dashboard from './containers/dashboard';
import UsersIndex from './components/users/index';
import UsersShow from './components/users/show';
import UsersEdit from './components/users/edit';
import UsersNew from './components/users/new';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="assignments/:id" component={Dashboard} />
    <Route path="users/:username/show" component={UsersShow} />
    <Route path="profile" component={UsersEdit} />
    <Route path="users/new" component={UsersNew} />
  </Route>
);
