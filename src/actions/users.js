import { GET_USERS, SET_USERS } from './../actions_types/users';

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