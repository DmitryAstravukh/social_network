import { AuthActionTypes } from '../actions_types/auth';
import { UserProfilePhotos } from '../types/profile';
import { AuthUserDataType } from "../types/auth";

export const setAuthUserData = (authUserData: AuthUserDataType, isAuth: boolean, errorMessage: string | null) => {
    return {
        type: AuthActionTypes.SET_AUTH_USER_DATA,
        authUserData,
        isAuth,
        errorMessage
    } as const
}

export const setCaptchaUrl = (captchaUrl: string | null) => {
    return {
        type: AuthActionTypes.SET_CAPTCHA_URL,
        captchaUrl
    } as const
}

export const setAuthUserPhotos = (photos: UserProfilePhotos) => {
    return {
        type: AuthActionTypes.SET_AUTH_USER_PHOTOS,
        photos
    } as const
}