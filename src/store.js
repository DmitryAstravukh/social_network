import { createStore } from 'redux';

import reducer from './reducers';

const store = createStore(reducer);

window.store = store;
//console.log(window.store.getState().newsReducer);

export default store;