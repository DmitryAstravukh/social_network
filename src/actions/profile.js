import { SET_USER_PROFILE_DATA } from './../actions_types/profile';

export const setUserProfileData = (userData) => {
    return {
        type: SET_USER_PROFILE_DATA,
        userData
    }
}