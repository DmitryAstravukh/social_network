import { AuthActions, InitActions } from "../actions";
import { SetInit } from '../actions/init';

import { InitActionTypes } from '../actions_types/init';
import { ThunkType } from "../types/base";

import { AuthInitialState, getAuthUserData } from './auth';

type InitInitialState = {
    isInit: boolean
}

const initialState: InitInitialState = {
    isInit: false
}

export const initApp = ():  ThunkType<AuthActions | InitActions, AuthInitialState & InitInitialState, void> => (dispatch) => {
    const promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => dispatch(SetInit(true)))
}


export const initReducer = (state = initialState, action: InitActions): InitInitialState => {
    switch (action.type){
        case InitActionTypes.SET_INIT:
            return {
                ...state,
                isInit: action.isInit
            }
        default: return state;
    }
}
