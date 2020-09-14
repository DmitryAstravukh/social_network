import { SET_AUTH_USER_DATA } from './../actions_types/auth';

/*
* data - object {
*                   email: string
                    id: number
                    login: string
* }
* */
export const setAuthUserData = (data) => {
    return {
        type: SET_AUTH_USER_DATA,
        data
    }
}