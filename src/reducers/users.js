import {
    GET_USERS,
    SET_USERS,
    CHANGE_PAGE_SIZE,
    CHANGE_PAGE_NUMBER,
    TOGGLE_LOADING,
    TOGGLE_FOLLOW
} from './../actions_types/users';

const inicialState = {
    users: [],
    currentPage: 1, //api default
    pageSize: 10, //api default
    pageSizeSteps: [10, 20, 50, 100],
    totalCount: 0,
    isLoading: true
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

const toggleLoading = (state, isLoading) => {
    return {
        ...state,
        isLoading
    }
}

const toggleFollow = (state, userId) => {
    return {
        ...state,
        users: state.users.map(user => {
            if(user.id === userId) {
                return {
                    ...user,
                    followed: !user.followed
                }
            }
            return user
        })
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

        case TOGGLE_LOADING:
            return toggleLoading(state, action.isLoading);

        case TOGGLE_FOLLOW:
            return toggleFollow(state, action.userId);

        default:
            return state;
    }
}

export default usersReducer;