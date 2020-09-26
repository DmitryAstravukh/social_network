import {
    GET_USERS,
    SET_USERS,
    CHANGE_PAGE_SIZE,
    CHANGE_PAGE_NUMBER,
    TOGGLE_LOADING,
    TOGGLE_FOLLOW,
    TOGGLE_FOLLOW_IN_PROGRESS,
    CLEAR_USERS_LIST
} from './../actions_types/users';

export const getUsers = () => {
    return {
        type: GET_USERS
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const changePageSize = (pageSize) => {
    return {
        type: CHANGE_PAGE_SIZE,
        pageSize
    }
}

export const changePageNumber = () => {
    return {
        type: CHANGE_PAGE_NUMBER
    }
}

export const toggleLoading = (isLoading) => {
    return {
        type: TOGGLE_LOADING,
        isLoading
    }
}

export const toggleFollow = (userId) => {
    return {
        type: TOGGLE_FOLLOW,
        userId
    }
}

export const toggleFollowInProgress = (userId, isFetching) => {
    return {
        type: TOGGLE_FOLLOW_IN_PROGRESS,
        userId,
        isFetching
    }
}

export const clearUsersList = () => {
    return {
        type: CLEAR_USERS_LIST
    }
}
