import { CHANGE_FILTER, TOGGLE_HIDDEN } from '../actionTypes';

const INITIAL_STATE = {
	filter: '',
	hidden: true
}

const filterReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case CHANGE_FILTER:
			return {
				...state,
				filter: action.filter
			}
		case TOGGLE_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			}
		default:
			return state
	}
}

export default filterReducer;