import { SET_USER_PROFILE_DATA, SET_USER_STATUS } from './../actions_types/profile';

export const setUserProfileData = (userData) => {
    return {
        type: SET_USER_PROFILE_DATA,
        userData
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}