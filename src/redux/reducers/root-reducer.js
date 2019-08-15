import { combineReducers } from 'redux';
import library from './library';
import filter from './filter';

export default combineReducers({
	library,
	filter
})