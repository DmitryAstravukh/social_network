import { combineReducers } from 'redux';
import { initReducer } from './init';
import { profileReducer } from './profile';
import { usersReducer } from './users';
import { newsReducer } from './news';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
    initReducer,
    profileReducer,
    usersReducer,
    newsReducer,
    authReducer,
});



