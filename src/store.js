import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

//window.store = store;
//console.log(window.store.getState().newsReducer);
//console.log(window.store.getState().usersReducer);

export default store;