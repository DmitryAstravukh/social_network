import { SET_AUTH_USER_DATA } from './../actions_types/auth';

import { setAuthUserData } from './../actions/auth';
import Api from '../api/api';
const api = new Api();

const inicialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}


export const getAuthUserData = () => dispatch => {
    api.getAuthUserData()
        .then(response => {
            if(response.resultCode === 0){
                dispatch(setAuthUserData(response.data))
            }
        } )
}

const authReducer = (state = inicialState, action) => {
    switch (action.type){
        case SET_AUTH_USER_DATA:
            return {
                ...action.data,
                isAuth: true
            }

        default: return state;
    }
}

export default authReducer;