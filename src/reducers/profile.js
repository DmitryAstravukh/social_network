import { SET_USER_PROFILE_DATA, SET_USER_STATUS } from './../actions_types/profile';

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

export const getUserData = userId => dispatch => {
    api.getUserData(userId)
        .then(data => dispatch(setUserProfileData(data)));
}

export const getUserStatus = userId => dispatch => {
    api.getUserStatus(userId).then(response => dispatch(setUserStatus(response.data)))
}

export const updateUserStatus = status => dispatch => {
    api.updateUserStatus(status)
        .then(response => {
            if(response.resultCode === 0) dispatch(setUserStatus(response.data))
        })
}


const profileReducer = (state = inicialState, action) => {
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
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export default profileReducer;