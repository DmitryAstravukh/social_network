import { InitActionTypes } from '../actions_types/init';

export const SetInit = (isInit: boolean) => {
    return {
        type: InitActionTypes.SET_INIT,
        isInit
    } as const
}