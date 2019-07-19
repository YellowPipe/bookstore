import actionTypes from './filter.actionTypes';

export const changeFilter = (filter) => ({
	type: actionTypes.CHANGE_FILTER,
	payload: filter 
})