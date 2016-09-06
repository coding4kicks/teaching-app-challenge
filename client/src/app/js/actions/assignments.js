import 'whatwg-fetch';
import _ from 'lodash';
import { push } from 'react-router-redux';

import {resetError} from './error';

import {
  GET_ASSIGNMENTS,
  GET_SUBMISSIONS,
  TOGGLE_SIDEBAR,
  SELECT_ASSIGNMENT,
  ERROR
} from './constants';

export function toggleSidebar() {
  return (dispatch) => {
    dispatch({type: TOGGLE_SIDEBAR});
  }
}

export function selectAssignment(id) {
  return (dispatch) => {
    dispatch({type: SELECT_ASSIGNMENT, id: id});
    dispatch(getSubmissions(id));
  }
}

// TODO: pagination
export function getAssignments(idSet) {

  return (dispatch) => {
    dispatch(resetError());

    return fetch("https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d", {
        data: {page: 1}
      })
        .then(response => response.json())
        .then(json => _.isEmpty(json.errors) ? json : Promise.reject(json.errors[0]))
        .then(payload => {
          if (!idSet && payload.length > 0) {
            dispatch({id: payload[0].id, type: SELECT_ASSIGNMENT});
          }
          return payload;
        })
        .then(payload => {
          if (!idSet && payload.length > 0) {
            dispatch(getSubmissions(payload[0].id));
          }
          return payload;
        })
        .then(payload => {dispatch({payload, type: GET_ASSIGNMENTS})})
        .catch(exception => dispatch({
          type: ERROR,
          payload: exception
        }));

  }
}

// TODO: pass in creator id, pagination
export function getSubmissions(assignmentId) {

  return (dispatch) => {
    dispatch(resetError());

    return fetch("https://api.edmodo.com/assignment_submissions?assignment_id=" + assignmentId +
                "&assignment_creator_id=73240721&access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d", {
        data: {page: 1}
      })
        .then(response => response.json())
        .then(json => _.isEmpty(json.errors) ? json : Promise.reject(json.errors[0]))
        .then(payload => {dispatch({payload, type: GET_SUBMISSIONS, id: assignmentId})})
        .catch(exception => dispatch({
          type: ERROR,
          payload: exception
      }));

  }
}


