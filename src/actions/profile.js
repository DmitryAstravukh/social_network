import { SET_USER_PROFILE_DATA, SET_USER_STATUS, SET_IS_LOADED_USER_DATA } from './../actions_types/profile';

export const setUserProfileData = (userData, userStatus) => {
    return {
        type: SET_USER_PROFILE_DATA,
        userData,
        userStatus
    }
}

export const setUserStatus = status => {
    return {
        type: SET_USER_STATUS,
        status
    }
}

export const setIsLoadedUserData = isLoadedUserData => {
    return {
        type: SET_IS_LOADED_USER_DATA,
        isLoadedUserData
    }
}