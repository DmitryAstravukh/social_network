import {
    SET_USER_PROFILE_DATA
} from './../actions_types/profile';

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
    }
};

const setUserProfileData = (state, userData) => {
    return {
        ...state,
        userData: {
            ...userData
        }

    }
}


const profileReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE_DATA:
            return setUserProfileData(state, action.userData);

        default:
            return state;
    }
}

export default profileReducer;