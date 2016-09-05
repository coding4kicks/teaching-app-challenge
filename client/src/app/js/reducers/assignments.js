import { GET_ASSIGNMENTS, GET_SUBMISSIONS, TOGGLE_SIDEBAR, SELECT_ASSIGNMENT} from '../actions/constants';

const INITIAL_STATE = { sidebar: true, submissions: {}, assignments: [], currentAssignment: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebar: !state.sidebar};
    case SELECT_ASSIGNMENT:
      return {...state, currentAssignment: action.id}
    case GET_SUBMISSIONS:
      const submissions = Object.assign({}, state.submissions, {
        [action.id]: actions.payload.data
      });
      return { ...state, submissions: submissions };
    case GET_ASSIGNMENTS:
      return { ...state, assignments: action.payload };
    default:
      return state;
  }
}