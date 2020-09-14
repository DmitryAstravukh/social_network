import { SET_AUTH_USER_DATA } from './../actions_types/auth';

const inicialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

/*
* data - object {
*                   email: string
                    id: number
                    login: string
* }
* */
const setAuthUserData = (state, data) => {
    return {
        ...data,
        isAuth: true
    }
}

const authReducer = (state = inicialState, action) => {
    switch (action.type){
        case SET_AUTH_USER_DATA:
            return setAuthUserData(state, action.data);

        default: return state;
    }
}

export default authReducer;