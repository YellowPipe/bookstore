import { CREATE_BOOK, REMOVE_BOOK, CHANGE_STATUS } from '../actionTypes';

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