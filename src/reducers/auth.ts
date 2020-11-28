import { ThunkAction } from "redux-thunk";

import { AuthActions } from '../actions';
import { setAuthUserData, setCaptchaUrl } from '../actions/auth';

import { AuthActionTypes } from '../actions_types/auth';

import { UserProfilePhotos } from "../types/profile";
import { AuthUserDataType } from '../types/auth';
import { ResultCodesEnum } from "../types/api";

import Api from '../api/api';
const api = new Api();

export type AuthInitialState = {
    id: number | null,
    email: string | null,
    login: string | null,
    photos: UserProfilePhotos,
    isAuth: boolean,
    errorMessage: string | null,
    captchaUrl: string | null
}

const initialState: AuthInitialState = {
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

type ThunkType = ThunkAction<Promise<void>, AuthInitialState, unknown, AuthActions>;

//SetAuthUserDataType
//TODO узнать что должен тут ретурнуть промис вместо void
export const getAuthUserData = () => async (dispatch: any) => {
    const r = await api.getAuthUserData();
    if(r.resultCode === ResultCodesEnum.Success) {
        setCaptchaUrl(null)
        return dispatch(setAuthUserData(r.data, true, null));
    }
}

const getCaptchaUrl = (): ThunkType => async dispatch => {
    const data = await api.getCaptchaUrl();
    dispatch(setCaptchaUrl(data.url))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async dispatch => {
    const data = await api.login(email, password, rememberMe, captcha);
    const authUserData: AuthUserDataType = { id: null, email: null, login: null };

    if(data.resultCode === ResultCodesEnum.Success) dispatch(getAuthUserData());
    if(data.resultCode === ResultCodesEnum.Error)   dispatch(setAuthUserData(authUserData, false, data.messages[0]));
    if(data.resultCode === ResultCodesEnum.Captcha) dispatch(getCaptchaUrl())
}

export const unLogin = (): ThunkType => async dispatch => {
    const data = await api.unLogin();
    const authUserData: AuthUserDataType = { id: null, email: null, login: null };

    if(data.resultCode === ResultCodesEnum.Success) dispatch(setAuthUserData(authUserData, false, null))
}

export const authReducer = (state = initialState, action: AuthActions): AuthInitialState => {
    switch (action.type){
        case AuthActionTypes.SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.authUserData,
                isAuth: action.isAuth,
                errorMessage: action.errorMessage
            }
        case AuthActionTypes.SET_CAPTCHA_URL:
            return { ...state, captchaUrl: action.captchaUrl}

        case AuthActionTypes.SET_AUTH_USER_PHOTOS:
            return { ...state, photos: action.photos }

        default: return state;
    }
}
