import { SET_AUTH_USER_DATA } from './../actions_types/auth';

import { setAuthUserData } from './../actions/auth';
import Api from '../api/api';
const api = new Api();

const inicialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null
}


export const getAuthUserData = () => async dispatch => {
    const r = await api.getAuthUserData();
    if(r.resultCode === 0) dispatch(setAuthUserData(r.data, true, null))
}

export const login = (email, password, rememberMe) => async dispatch => {
    const r = await api.login(email, password, rememberMe);
    // console.log(r);
    // console.log(r.data.messages[0]);
    const data = {
        id: null,
        email: null,
        login: null
    }
    if(r.data.resultCode === 0) dispatch(getAuthUserData())
    if(r.data.resultCode === 1) dispatch(setAuthUserData(data, false, r.data.messages[0]))
    //if(r.data.resultCode === 10) dispatch(setAuthUserData(data, false, r.data.messages[0]))//captcha
}

export const unLogin = () => async dispatch => {
    const r = await api.unLogin();
    if(r.resultCode === 0) {
        const data = {
            id: null,
            email: null,
            login: null
        }
        dispatch(setAuthUserData(data, false, null))
    }
}

const authReducer = (state = inicialState, action) => {
    switch (action.type){
        case SET_AUTH_USER_DATA:
            return {
                ...action.payload,
                isAuth: action.isAuth
            }

        default: return state;
    }
}

export default authReducer;