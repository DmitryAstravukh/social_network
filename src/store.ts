import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './reducers';
type RootReducerType = typeof rootReducer;
export type StateType = ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
//window.__store__ = store;
//console.log(window.store.getState().newsReducer);
//console.log(window.store.getState().usersReducer);

export default store;