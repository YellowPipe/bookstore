import actionTypes from './library.actionTypes';

export const addBook = (book) => ({
	type: actionTypes.CREATE_BOOK,
	payload: book 
})

export const removeBook = (book_id) => ({
	type: actionTypes.REMOVE_BOOK,
	payload: book_id
})

export const changeStatus = (book_id) => ({
	type: actionTypes.CHANGE_STATUS,
	payload: book_id
})