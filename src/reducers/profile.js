import {
    SET_USER_PROFILE_DATA,
    SET_USER_STATUS,
    SET_IS_LOADED_USER_DATA,
    SET_USER_PHOTO
} from './../actions_types/profile';

import Api from '../api/api';
import { setUserProfileData, setUserStatus } from './../actions/profile';
import {setIsLoadedUserData, setUserPhoto} from '../actions/profile';
import {useSelector} from 'react-redux';
import {setAuthUserPhotos} from '../actions/auth';

const api = new Api();

const inicialState = {
    userData: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            large: '',
            small: ''
        },
        userId: ''
    },
    isLoadedUserData: false,
    status: ''
};

export const getUserData = userId => async (dispatch, getState) => {
    const { authReducer: { id } } = getState();
    const [userData, userStatus] = await Promise.all([
        api.getUserData(userId),
        api.getUserStatus(userId)
    ]);
    if(+userData.userId === +id) dispatch(setAuthUserPhotos(userData.photos));
    dispatch(setUserProfileData(userData, userStatus.data))
}


export const updateUserStatus = status => async dispatch => {
    const r = await api.updateUserStatus(status);
    if(r.resultCode === 0) dispatch(setUserStatus(r.data))
}

export const changeUserPhoto = photo => async dispatch => {
    dispatch(setIsLoadedUserData(false));
    const r = await api.changeProfilePhoto(photo);
    if(r.resultCode === 0) {
        dispatch(setUserPhoto(r.data.photos));
        dispatch(setIsLoadedUserData(true))
    }
}

export const profileReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                userData: {
                    ...action.userData
                },
                status: action.userStatus,
                isLoadedUserData: true
            }

        case SET_USER_STATUS:
            return { ...state, status: action.status }

        case SET_IS_LOADED_USER_DATA:
            return { ...state, isLoadedUserData: action.isLoadedUserData }

        case SET_USER_PHOTO:
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

        default:
            return state;
    }
}
