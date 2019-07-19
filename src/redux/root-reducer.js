import { combineReducers } from 'redux';
import libraryReducer from './library/library.reducer';
import filterReducer from './filter/filter.reducer';

export default combineReducers({
	library: libraryReducer,
	filter: filterReducer
})