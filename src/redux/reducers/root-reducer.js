import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth'
import library from './library';
import filter from './filter';

export default combineReducers({
	library,
	filter,
	reduxTokenAuth: reduxTokenAuthReducer
})