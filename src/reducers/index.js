import { combineReducers } from 'redux';
import newsReducer from './news';
import usersReducer from './users';
import profileReducer from './profile';

export default combineReducers({
    newsReducer,
    usersReducer,
    profileReducer
});
