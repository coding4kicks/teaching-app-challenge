import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux'

import UsersReducer from './users';
import AssignmentsReducer from './assignments';
import ErrorReducer from './error';

export default combineReducers({
  users: UsersReducer,
  assignments: AssignmentsReducer,
  error: ErrorReducer,
  routing: routerReducer
});

