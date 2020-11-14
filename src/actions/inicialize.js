import { SET_INICIALIZED } from './../actions_types/inicialize';

export const SetInicialized = isInicialized => {
    return {
        type: SET_INICIALIZED,
        isInicialized
    }
}