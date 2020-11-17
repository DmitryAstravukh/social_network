import { createSelector } from 'reselect';

const userData = state => state.profileReducer.userData;
const status = state => state.profileReducer.status;


export const ProfileData = createSelector(
    [userData, status],
    (userData, status) =>  [userData, status]
);