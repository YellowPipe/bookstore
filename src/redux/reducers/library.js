import { CREATE_BOOK, REMOVE_BOOK, CHANGE_STATUS, SET_LIBRARY } from '../actionTypes';

const INITIAL_STATE = []

const libraryReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case CREATE_BOOK:
			return 	[...state, action.book]
		case REMOVE_BOOK:
			return state.filter(({id}) => id !== action.bookId)
		case CHANGE_STATUS:
			return state.map((book) => {
						if (book.id === action.bookId) {
							book.read = !book.read
						}
						return book 	
					})
		case SET_LIBRARY:
			return action.books		
		default:
			return state
	}
}

export default libraryReducer;