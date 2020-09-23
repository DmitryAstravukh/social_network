import { createStore } from 'redux';

import reducer from './reducers';

const store = createStore(reducer);

//window.store = store;
//console.log(window.store.getState().newsReducer);
//console.log(window.store.getState().usersReducer);

export default store;