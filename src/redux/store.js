import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/root-reducer';

const middlewares = [logger];
const configureStore = () => createStore(rootReducer, applyMiddleware(...middlewares));

export default configureStore
