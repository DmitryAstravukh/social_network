import {
    SET_AUTH_USER_DATA,
    SET_CAPTCHA_URL,
    SET_AUTH_USER_PHOTOS
} from './../actions_types/auth';


export const setAuthUserData = (payload, isAuth, errorMessage) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload,
        isAuth,
        errorMessage
    }
}

export const setCaptchaUrl = captchaUrl => {
    return {
        type: SET_CAPTCHA_URL,
        captchaUrl
    }
}

export const setAuthUserPhotos = photos => {
    return {
        type: SET_AUTH_USER_PHOTOS,
        photos
    }
}