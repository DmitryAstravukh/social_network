import { createSelector } from 'reselect';
import { StateType } from "../store";

const userData = (state: StateType) => state.profileReducer.userData;
const status = (state: StateType) => state.profileReducer.status;


export const ProfileData = createSelector(
    [userData, status],
    (userData, status) =>  [userData, status]
);