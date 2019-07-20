import actionTypes from './library.actionTypes';

const INITIAL_STATE = {
	books: [{title: 'First Book', category: 'Action', id: 0, read: true}]
}

const libraryReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case actionTypes.CREATE_BOOK:
			return {
				...state,
				books: [...state.books, action.payload]
			}
		case actionTypes.REMOVE_BOOK:
			return {
				...state,
				books: state.books.filter(({id}) => id !== action.payload )
			}

		case actionTypes.CHANGE_STATUS:
			return {
				...state,
				books: state.books.map((book) => {
					if (book.id === action.payload) {
						book.read = !book.read
					}
					return book 	
				})
			}
		default:
			return state
	}
}

export default libraryReducer;