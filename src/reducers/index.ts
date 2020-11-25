import { combineReducers } from 'redux';
import { newsReducer } from './news';
import { usersReducer } from './users';
import { profileReducer } from './profile';
import { authReducer } from './auth';
import { inicializeReducer } from './inicialize'

export const rootReducer = combineReducers({
    inicializeReducer,
    profileReducer,
    usersReducer,
    newsReducer,
    authReducer,
});



