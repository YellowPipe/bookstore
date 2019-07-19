import actionTypes from './library.actionTypes';

export const addBook = (book) => ({
	type: actionTypes.CREATE_BOOK,
	payload: book 
})

export const removeBook = (book) => ({
	type: actionTypes.REMOVE_BOOK,
	payload: book
})