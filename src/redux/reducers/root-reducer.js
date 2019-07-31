import { combineReducers } from 'redux';
import library from './library';
import filter from './filter';
import session from './session';

export default combineReducers({
	library,
	filter,
	session
})