import { generateAuthActions } from 'redux-token-auth'
import { authUrl } from './constants/constants'

const config = {
  authUrl,
  userAttributes: {
    username: 'username',
    email: 'email',
    password: 'password',
    password_confirmation: 'passwordConfirmation'

  },
  userRegistrationAttributes: {
    email: 'email',
    password: 'password',
    username: 'username',
    password_confirmation: 'passwordConfirmation'
  },
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}