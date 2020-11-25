import {
    SET_AUTH_USER_DATA,
    SET_CAPTCHA_URL,
    SET_AUTH_USER_PHOTOS
} from './../actions_types/auth';
import { UserProfilePhotos } from '../types/profile';
import { AuthUserDataType } from "../types/auth";


export const setAuthUserData = (authUserData: AuthUserDataType, isAuth: boolean, errorMessage: string | null) => {
    return {
        type: SET_AUTH_USER_DATA,
        authUserData,
        isAuth,
        errorMessage
    }
}

export const setCaptchaUrl = (captchaUrl: string | null) => {
    return {
        type: SET_CAPTCHA_URL,
        captchaUrl
    }
}

export const setAuthUserPhotos = (photos: UserProfilePhotos) => {
    return {
        type: SET_AUTH_USER_PHOTOS,
        photos
    }
}