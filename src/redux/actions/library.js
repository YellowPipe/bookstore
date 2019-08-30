import {
		ADD_BOOK_BEGIN, ADD_BOOK_SUCCESS, ADD_BOOK_FAILURE,
		REMOVE_BOOK_BEGIN, REMOVE_BOOK_SUCCESS, REMOVE_BOOK_FAILURE,
		CHANGE_STATUS_BEGIN, CHANGE_STATUS_SUCCESS, CHANGE_STATUS_FAILURE,
		SET_LIBRARY_BEGIN, SET_LIBRARY_SUCCESS, SET_LIBRARY_FAILURE
	} from '../actionTypes';
import { API_URL } from '../../constants/constants';

export const addBookBegin = (book) => ({
	type: ADD_BOOK_BEGIN 
})

export const addBookSuccess = (book) => ({
	type: ADD_BOOK_SUCCESS ,
	book
})

export const addBookFailure = error => ({
	type: ADD_BOOK_FAILURE,
	payload: { error } 
})


export const removeBookBegin = (bookId) => ({
	type: REMOVE_BOOK_BEGIN,
	bookId
})

export const removeBookSuccess = () => ({
	type: REMOVE_BOOK_SUCCESS
})

export const removeBookFailure = error => ({
	type: REMOVE_BOOK_FAILURE,
	payload: { error }
})

export const changeStatusBegin = bookId => ({
	type: CHANGE_STATUS_BEGIN,
	bookId
})

export const changeStatusSuccess = () => ({
	type: CHANGE_STATUS_SUCCESS
})

export const changeStatusFailure = error => ({
	type: CHANGE_STATUS_FAILURE,
	payload: { error }
})

export const setLibraryBegin = () => ({
	type: SET_LIBRARY_BEGIN
})

export const setLibrarySuccess = (books) => ({
	type: SET_LIBRARY_SUCCESS,
	books
})

export const setLibraryFailure = error => ({
	type: SET_LIBRARY_FAILURE,
	payload: { error }
})

export const setLibrary = () => {
	return dispatch => {
    	dispatch(setLibraryBegin());
    	return fetch(`${API_URL}/books`, {
	      method: 'GET',
	      headers: {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
	    })
      	.then(res => res.json())
      	.then(books => {
        	dispatch(setLibrarySuccess(books));
      	})
      	.catch(error => {
      		dispatch(setLibraryFailure(error))
      	});
  	};
};

export const addBook = ({title, category}) => {
	return dispatch => {
    	dispatch(addBookBegin());
    	return fetch(`${API_URL}/books`, {
		   	method: 'post',
		   	headers: {
		   		'Content-Type':'application/json',
				'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
			},
			body: JSON.stringify({
			    "title": title,
			    "category": category,
			    "read": "false"
		   })
		})
      	.then(res => res.json())
      	.then(book => {
        	dispatch(addBookSuccess(book));
      	})
      	.catch(error => {
      		dispatch(addBookFailure(error))
      	});
  	};
};