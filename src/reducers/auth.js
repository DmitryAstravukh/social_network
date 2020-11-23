import {
    SET_AUTH_USER_DATA,
    SET_CAPTCHA_URL,
    SET_AUTH_USER_PHOTOS
} from './../actions_types/auth';

import { setAuthUserData, setCaptchaUrl } from './../actions/auth';
import Api from '../api/api';
const api = new Api();

const inicialState = {
    id: null,
    email: null,
    login: null,
    photos: {
        large: null,
        small: null
    },
    isAuth: false,
    errorMessage: null,
    captchaUrl: null
}


export const getAuthUserData = () => async dispatch => {
    const r = await api.getAuthUserData();
    if(r.resultCode === 0) {
        setCaptchaUrl(null)
        return dispatch(setAuthUserData(r.data, true, null));
    }
}

const getCaptchaUrl = () => async dispatch => {
    const data = await api.getCaptchaUrl();
    dispatch(setCaptchaUrl(data.url))
}

export const login = (email, password, rememberMe, captcha) => async dispatch => {
    const data = await api.login(email, password, rememberMe, captcha);
    const userData = { id: null, email: null, login: null };

    if(data.resultCode === 0)  dispatch(getAuthUserData());
    if(data.resultCode === 1)  dispatch(setAuthUserData(userData, false, data.messages[0]));
    if(data.resultCode === 10) dispatch(getCaptchaUrl())
}

export const unLogin = () => async dispatch => {
    const data = await api.unLogin();
    const userData = { id: null, email: null, login: null };

    if(data.resultCode === 0) dispatch(setAuthUserData(userData, false, null))
}

export const authReducer = (state = inicialState, action) => {
    switch (action.type){
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.isAuth,
                errorMessage: action.errorMessage
            }
        case SET_CAPTCHA_URL:
            return { ...state, captchaUrl: action.captchaUrl}

        case SET_AUTH_USER_PHOTOS:
            return { ...state, photos: action.photos }

        default: return state;
    }
}
