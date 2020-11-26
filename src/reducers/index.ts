import { combineReducers } from 'redux';
import { newsReducer } from './news';
import { usersReducer } from './users';
import { profileReducer } from './profile';
import { authReducer } from './auth';
import { initReducer } from './init'

export const rootReducer = combineReducers({
    initReducer,
    profileReducer,
    usersReducer,
    newsReducer,
    authReducer,
});



