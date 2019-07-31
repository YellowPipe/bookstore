import { LOG_IN_SUCCESS, LOG_OUT } from '../actionTypes';

export const loginSuccess = () => ({
  type: LOG_IN_SUCCESS
})

export const logOutUser = () => ({
  type: LOG_OUT
})

