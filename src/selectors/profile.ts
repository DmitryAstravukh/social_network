import { createSelector } from 'reselect';
import { StateType } from "../store";
import { UserDataType } from "../types/profile";

const userData = (state: StateType): UserDataType => state.profileReducer.userData;
const status = (state: StateType): string | null => state.profileReducer.status;


export const ProfileData = createSelector(
    [userData, status],
    (userData, status) =>  ({userData, status})
);