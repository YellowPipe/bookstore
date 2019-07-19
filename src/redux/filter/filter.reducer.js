import actionTypes from './filter.actionTypes';

const INITIAL_STATE = {
	filter: '',
	hidden: true
}

const filterReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case actionTypes.CHANGE_FILTER:
			return {
				...state,
				filter: action.payload
			}
		case actionTypes.TOGGLE_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			}
		default:
			return state
	}
}

export default filterReducer;