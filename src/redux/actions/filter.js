import { CHANGE_FILTER, TOGGLE_HIDDEN } from '../actionTypes';

export const changeFilter = (filter) => ({
	type: CHANGE_FILTER,
	filter 
})

export const toggleHidden = () => ({
	type: TOGGLE_HIDDEN
})