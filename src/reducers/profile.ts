import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { StateType } from "../store";

import { AuthActions, ProfileActions } from "../actions";
import { setUserProfileData, setUserStatus } from '../actions/profile';
import { setIsLoadedUserData, setUserPhoto } from '../actions/profile';
import { setAuthUserPhotos } from '../actions/auth';

import { ProfileActionTypes } from '../actions_types/profile';

import { UserDataType } from '../types/profile';
import { ResultCodesEnum } from '../types/api';

import Api from '../api/api';

const api = new Api();

type ProfileInitialState = {
    userData: UserDataType,
    isLoadedUserData: boolean,
    status: string | null
}

const initialState: ProfileInitialState = {
    userData: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        fullName: null,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: {
            large: null,
            small: null
        },
        userId: null
    },
    isLoadedUserData: false,
    status: null
};

type ThunkType = ThunkAction<Promise<void>, ProfileInitialState, unknown, ProfileActions>;

export const getUserData = (userId: number) => async (dispatch: Dispatch<ProfileActions | AuthActions>, getState: () => StateType) => {
    const { authReducer: { id } } = getState();
    const [userData, userStatus] = await Promise.all([
        api.getUserData(userId),
        api.getUserStatus(userId)
    ]);

    if(Number(userData.userId) === Number(id)) dispatch(setAuthUserPhotos(userData.photos));
    dispatch(setUserProfileData(userData, userStatus))
}


export const updateUserStatus = (status: string | null): ThunkType => async dispatch => {
    const r = await api.updateUserStatus(status);
    if(r.resultCode === ResultCodesEnum.Success) dispatch(setUserStatus(status))
}

export const changeUserPhoto = (photo: File): ThunkType => async dispatch => {
    dispatch(setIsLoadedUserData(false));
    const r = await api.changeProfilePhoto(photo);
    if(r.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserPhoto(r.data.photos));
        dispatch(setIsLoadedUserData(true))
    }
}

export const profileReducer = (state = initialState, action: ProfileActions) => {
    switch (action.type) {
        case ProfileActionTypes.SET_USER_PROFILE_DATA:
            return {
                ...state,
                userData: {
                    ...action.userData
                },
                status: action.userStatus,
                isLoadedUserData: true
            }

        case ProfileActionTypes.SET_USER_STATUS:
            return { ...state, status: action.status }

        case ProfileActionTypes.SET_IS_LOADED_USER_DATA:
            return { ...state, isLoadedUserData: action.isLoadedUserData }

        case ProfileActionTypes.SET_USER_PHOTO:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    photos: {
                        small: action.photos.small,
                        large: action.photos.large
                    }
                }

            }

        default: return state;
    }
}
