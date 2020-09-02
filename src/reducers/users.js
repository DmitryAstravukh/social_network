import { GET_USERS, SET_USERS } from './../actions_types/users';
import api from '../api/api';

const inicialState = {
    users: [],
    currentPage: 1, //api default
    pageSize: 10, //api default
    totalCount: 0
}

const setUsers = (state, users) => {
    return {
        ...state,
        users: [
            ...state.users,
            ...users.items
        ],
        totalCount: users.totalCount
    }
}


const usersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return setUsers(state, action.users);

        default:
            return state;
    }
}

export default usersReducer;