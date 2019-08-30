import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from '../actionTypes';
import { API_URL } from '../../constants/constants';

export const loginBegin = () => ({
  type: LOGIN_BEGIN
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: { error }
});

export const logOut = () => ({
  type: LOG_OUT
});

export function login(credentials) {
  return dispatch => {
    dispatch(loginBegin());
    return fetch(`${API_URL}/user_token`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({auth: credentials})
      })
      .then(res => res.json())
      .then(response => {
          sessionStorage.setItem('jwt', response.jwt)
       })
      .then(json => {
        dispatch(loginSuccess());
      })
      .catch(error => {
      	alert('User not found')
      	dispatch(loginFailure(error))
      });
  };
}