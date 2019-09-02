import { BEGIN_LOADING_USER, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE, LOG_OUT } from '../actionTypes';

const INITIAL_STATE = {
	loading: false,
	session: !!sessionStorage.jwt,
	error: null
}

export default function sessionReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
	case BEGIN_LOADING_USER:
		return {
			...state,
			loading: true,
			error: null
		};
    case LOGIN_SUCCESS:
      	return {
			...state,
			session: true,
			loading: false,
			error: null
		};
	case LOGIN_FAILURE:
      	return {
			...state,
			session: false,
			loading: false,
			error: action.payload.error
		};
    case REGISTER_SUCCESS:
      	return {
			...state,
			session: true,
			loading: false,
			error: null
		};
	case REGISTER_FAILURE:
      	return {
			...state,
			session: false,
			loading: false,
			error: action.payload.error
		};
    case LOG_OUT:
      	return {
      		...state,
      		session: false
      	};
    default: 
      	return state;
  }
} 