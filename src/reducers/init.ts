import { InitActionTypes } from '../actions_types/init';

import { SetInit } from '../actions/init';

import { getAuthUserData } from './auth';
import { ThunkAction } from "redux-thunk";
import { InitActions } from "../actions";

type InitInitialState = {
    isInit: boolean
}

const initialState: InitInitialState = {
    isInit: false
}

type ThunkType = ThunkAction<Promise<void>, InitInitialState, unknown, InitActions>;

export const initApp = (): ThunkType => async dispatch => {
    const promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => dispatch(SetInit(true)))
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
