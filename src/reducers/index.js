import { combineReducers } from 'redux';
import newsReducer from './news';
import usersReducer from './users';
import profileReducer from './profile';
import authReducer from './auth';

export default combineReducers({
    newsReducer,
    usersReducer,
    profileReducer,
    authReducer
});
