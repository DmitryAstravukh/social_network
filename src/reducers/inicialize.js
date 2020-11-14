import { SET_INICIALIZED } from './../actions_types/inicialize';

import { SetInicialized } from './../actions/inicialize';

import { getAuthUserData } from './auth';

const inicialState = {
    isInicialized: false
}


export const inicializeApp = () => async dispatch => {
    const promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => dispatch(SetInicialized(true)))
}


export const inicializeReducer = (state = inicialState, action) => {
    switch (action.type){
        case SET_INICIALIZED:
            return {
                ...state,
                isInicialized: action.isInicialized
            }
        default: return state;
    }
}
