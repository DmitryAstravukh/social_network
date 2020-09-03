import { GET_USERS, SET_USERS, CHANGE_PAGE_SIZE, CHANGE_PAGE_NUMBER } from './../actions_types/users';
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

const changePageSize = (state, pageSize) => {
    return {
        ...state,
        users: [],
        pageSize
    }
}

const changePageNumber = (state) => {
    return {
        ...state,
        currentPage: state.currentPage + 1
    }
}

const usersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return setUsers(state, action.users);

        case CHANGE_PAGE_SIZE:
            return changePageSize(state, action.pageSize);

        case CHANGE_PAGE_NUMBER:
            return changePageNumber(state);

        default:
            return state;
    }
}

export default usersReducer;