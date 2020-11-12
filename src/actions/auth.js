import { SET_AUTH_USER_DATA } from './../actions_types/auth';


export const setAuthUserData = (payload, isAuth, errorMessage) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload,
        isAuth,
        errorMessage
    }
}