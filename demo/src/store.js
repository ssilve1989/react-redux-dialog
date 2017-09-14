import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

const middleware = [logger];

export default createStore(reducers, applyMiddleware(...middleware));