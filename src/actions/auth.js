import { SET_AUTH_USER_DATA, SET_CAPTCHA_URL } from './../actions_types/auth';


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