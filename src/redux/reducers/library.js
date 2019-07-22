import { CREATE_BOOK, REMOVE_BOOK, CHANGE_STATUS } from '../actionTypes';

const INITIAL_STATE = {
	books: [{title: 'First Book', category: 'Action', id: 0, read: true}]
}

const libraryReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case CREATE_BOOK:
			return {
				...state,
				books: [...state.books, action.book]
			}
		case REMOVE_BOOK:
			return {
				...state,
				books: state.books.filter(({id}) => id !== action.bookId )
			}

		case CHANGE_STATUS:
			return {
				...state,
				books: state.books.map((book) => {
					if (book.id === action.bookId) {
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