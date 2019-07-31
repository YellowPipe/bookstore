import { LOG_IN_SUCCESS, LOG_OUT } from '../actionTypes';
// import { browserHistory } from 'react-router';

const INITIAL_STATE = {
	session: !!sessionStorage.jwt
}

export default function sessionReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      return !!sessionStorage.jwt
    case LOG_OUT:
      return {...state, session: false}
    default: 
      return state;
  }
}