import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_BEGIN, REGISTER_SUCCESS, REGISTER_FAILURE, LOG_OUT } from '../actionTypes';
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

export const registerBegin = () => ({
  type: REGISTER_BEGIN
})

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS
});

export const registerFailure = error => ({
  type: REGISTER_FAILURE,
  payload: { error }
});

export const logOut = () => ({
  type: LOG_OUT
});

export const login = (credentials) => {
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
};

export const register = (credentials) => {
  const {
        email,
        username,
        password,
        passwordConfirmation
      } = credentials
  return dispatch => {
    dispatch(registerBegin());
    return fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({email, username, password, password_confirmation: passwordConfirmation})
      })
      .then(res => res.json())
      .then(response => {
          sessionStorage.setItem('jwt', response.jwt)
       })
      .then(json => {
        dispatch(registerSuccess());
      })
      .catch(error => {
        alert('User not found')
        dispatch(registerFailure(error))
      });
  };
};