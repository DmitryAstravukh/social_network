import { UsersActionTypes } from '../actions_types/users';
import { UserType } from '../types/user';

export const getUsers = () => {
    return {
        type: UsersActionTypes.GET_USERS
    } as const
}

export const setUsers = (users: UserType) => {
    return {
        type: UsersActionTypes.SET_USERS,
        users
    } as const
}

export const changePageSize = (pageSize: number) => {
    return {
        type: UsersActionTypes.CHANGE_PAGE_SIZE,
        pageSize
    } as const
}

export const changeCurrentPage = (pageNumber: number) => {
    return {
        type: UsersActionTypes.CHANGE_CURRENT_PAGE,
        pageNumber
    } as const
}

export const toggleLoading = (isLoading: boolean) => {
    return {
        type: UsersActionTypes.TOGGLE_LOADING,
        isLoading
    } as const
}

export const toggleFollow = (userId: number) => {
    return {
        type: UsersActionTypes.TOGGLE_FOLLOW,
        userId
    } as const
}

export const toggleFollowInProgress = (userId: number, isFetching: boolean) => {
    return {
        type: UsersActionTypes.TOGGLE_FOLLOW_IN_PROGRESS,
        userId,
        isFetching
    } as const
}

export const clearUsersList = () => {
    return {
        type: UsersActionTypes.CLEAR_USERS_LIST
    } as const
}
