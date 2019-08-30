import {
		ADD_BOOK_BEGIN, ADD_BOOK_SUCCESS, ADD_BOOK_FAILURE,
		REMOVE_BOOK_BEGIN, REMOVE_BOOK_SUCCESS, REMOVE_BOOK_FAILURE,
		CHANGE_STATUS_BEGIN, CHANGE_STATUS_SUCCESS, CHANGE_STATUS_FAILURE,
		SET_LIBRARY_BEGIN, SET_LIBRARY_SUCCESS, SET_LIBRARY_FAILURE
	} from '../actionTypes';

const INITIAL_STATE = {
	books: [],
	loading: false,
	error: null
}

const libraryReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case ADD_BOOK_BEGIN:
			return 	{
				...state,
				loading: true,
				error: null
			}
		case ADD_BOOK_SUCCESS:
			return 	{
				...state,
				loading: false,
				books: [...state.books, action.book]
			}
		case ADD_BOOK_FAILURE:
			return 	{
				...state,
				loading: false,
				error: action.payload.error
			}
		// case REMOVE_BOOK:
		// 	return state.filter(({id}) => id !== action.bookId)
		// case CHANGE_STATUS:
		// 	return state.map((book) => {
		// 				if (book.id === action.bookId) {
		// 					book.read = !book.read
		// 				}
		// 				return book 	
		// 			})
		case SET_LIBRARY_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			}
		case SET_LIBRARY_SUCCESS:
			return {
				...state,
				loading: false,
				books: action.books
			}
		case SET_LIBRARY_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			}
		default:
			return state
	}
}

export default libraryReducer;