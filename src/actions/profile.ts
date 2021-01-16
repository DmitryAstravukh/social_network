import { ProfileActionTypes } from '../actions_types/profile';
import { UserDataType, UserProfilePhotos } from "../types/profile";


export const setUserProfileData = (userData: UserDataType, userStatus: string | null) => {
    return {
        type: ProfileActionTypes.SET_USER_PROFILE_DATA,
        userData,
        userStatus
    } as const
}

export const setUserStatus = (status: string | null) => {
    return {
        type: ProfileActionTypes.SET_USER_STATUS,
        status
    } as const
}

export const setIsLoadedUserData = (isLoadedUserData: boolean) => {
    return {
        type: ProfileActionTypes.SET_IS_LOADED_USER_DATA,
        isLoadedUserData
    } as const
}

export const setUserPhoto = (photos: UserProfilePhotos) => {
    return {
        type: ProfileActionTypes.SET_USER_PHOTO,
        photos
    } as const
}

export const changeUserData = (userData: UserDataType) => {
    return {
        type: ProfileActionTypes.CHANGE_USER_DATA,
        userData
    } as const
}
