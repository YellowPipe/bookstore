import { CREATE_BOOK, REMOVE_BOOK, CHANGE_STATUS, SET_LIBRARY } from '../actionTypes';

export const addBook = (book) => ({
	type: CREATE_BOOK,
	book 
})

export const removeBook = (bookId) => ({
	type: REMOVE_BOOK,
	bookId
})

export const changeStatus = (bookId) => ({
	type: CHANGE_STATUS,
	bookId
})

export const setLibrary = (books) => ({
	type: SET_LIBRARY,
	books
})