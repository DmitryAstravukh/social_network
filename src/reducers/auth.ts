import {
    SET_AUTH_USER_DATA,
    SET_CAPTCHA_URL,
    SET_AUTH_USER_PHOTOS
} from './../actions_types/auth';

import { setAuthUserData, setCaptchaUrl } from '../actions/auth';
import Api from '../api/api';
import {UserProfilePhotos} from "../types/profile-types";
import { AuthUserDataType } from '../types/auth-types';
const api = new Api();

type AuthInicialState = {
    id: number | null,
    email: string | null,
    login: string | null,
    photos: UserProfilePhotos,
    isAuth: boolean,
    errorMessage: string | null,
    captchaUrl: string | null
}

const inicialState: AuthInicialState = {
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


export const getAuthUserData = () => async (dispatch: any) => {
    const r = await api.getAuthUserData();
    if(r.resultCode === 0) {
        setCaptchaUrl(null)
        return dispatch(setAuthUserData(r.data, true, null));
    }
}

const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await api.getCaptchaUrl();
    dispatch(setCaptchaUrl(data.url))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {
    const data = await api.login(email, password, rememberMe, captcha);
    const authUserData: AuthUserDataType = { id: null, email: null, login: null };

    if(data.resultCode === 0)  dispatch(getAuthUserData());
    if(data.resultCode === 1)  dispatch(setAuthUserData(authUserData, false, data.messages[0]));
    if(data.resultCode === 10) dispatch(getCaptchaUrl())
}

export const unLogin = () => async (dispatch: any) => {
    const data = await api.unLogin();
    const authUserData: AuthUserDataType = { id: null, email: null, login: null };

    if(data.resultCode === 0) dispatch(setAuthUserData(authUserData, false, null))
}

export const authReducer = (state = inicialState, action: any): AuthInicialState => {
    switch (action.type){
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.authUserData,
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
