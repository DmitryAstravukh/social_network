import {applyMiddleware, createStore, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;
//console.log(window.store.getState().newsReducer);
//console.log(window.store.getState().usersReducer);

export default store;