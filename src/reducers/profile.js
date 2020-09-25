import {
    SET_USER_PROFILE_DATA
} from './../actions_types/profile';

import Api from '../api/api';
import { setUserProfileData } from './../actions/profile';

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
    isLoadedUserData: false
};

export const getUserData = (userId) => (dispatch) => {
    api.getUserData(userId)
        .then(data => dispatch(setUserProfileData(data)));
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
        default:
            return state;
    }
}

export default profileReducer;