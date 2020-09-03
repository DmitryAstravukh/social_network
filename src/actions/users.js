import { GET_USERS, SET_USERS, CHANGE_PAGE_SIZE, CHANGE_PAGE_NUMBER} from './../actions_types/users';

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
