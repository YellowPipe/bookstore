import actionTypes from './library.actionTypes';

const INITIAL_STATE = {
	books: [{title: 'First Book', category: 'Action', id: 0}]
}

const libraryReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case actionTypes.CREATE_BOOK:
			console.log('adding book')
			return {
				...state,
				books: [...state.books, action.payload]
			}
		case actionTypes.REMOVE_BOOK:
			break;
		default:
			console.log('default')
			return state
	}
}

export default libraryReducer;