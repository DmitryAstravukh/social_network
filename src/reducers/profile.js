import { SET_USER_PROFILE_DATA, SET_USER_STATUS, SET_IS_LOADED_USER_DATA } from './../actions_types/profile';

import Api from '../api/api';
import { setUserProfileData, setUserStatus } from './../actions/profile';

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

export const getUserData = userId => async dispatch => {
    const data = await api.getUserData(userId);
    dispatch(setUserProfileData(data))
}

export const getUserStatus = userId => async dispatch => {
    const r = await api.getUserStatus(userId);
    dispatch(setUserStatus(r.data))
}

export const updateUserStatus = status => async dispatch => {
    const r = await api.updateUserStatus(status);
    if(r.resultCode === 0) dispatch(setUserStatus(r.data))
}


export const profileReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                userData: {
                    ...action.userData
                },
                isLoadedUserData: true
            }

        case SET_USER_STATUS:
            return { ...state, status: action.status }

        case SET_IS_LOADED_USER_DATA:
            return { ...state, isLoadedUserData: action.isLoadedUserData }

        default:
            return state;
    }
}
