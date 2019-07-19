import actionTypes from './filter.actionTypes';

const INITIAL_STATE = {
	filter: ''
}

const filterReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case actionTypes.CHANGE_FILTER:
			return {
				...state,
				filter: action.payload
			}
		default:
			return state
	}
}

export default filterReducer;