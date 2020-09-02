import { combineReducers } from 'redux';
import newsReducer from './news';
import usersReducer from './users';

export default combineReducers({
    newsReducer,
    usersReducer
});
