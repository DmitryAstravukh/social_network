import {
    GET_USERS,
    SET_USERS,
    CHANGE_PAGE_SIZE,
    CHANGE_PAGE_NUMBER,
    TOGGLE_LOADING,
    TOGGLE_FOLLOW,
    TOGGLE_FOLLOW_IN_PROGRESS
} from './../actions_types/users';
import Api from '../api/api';
import { setUsers, toggleLoading, toggleFollow, toggleFollowInProgress } from './../actions/users';


const api = new Api();
const inicialState = {
    users: [],
    currentPage: 1, //api default
    pageSize: 10, //api default
    pageSizeSteps: [10, 20, 50, 100],
    totalCount: 0,
    isLoading: true,
    followInProgress:[]
}

// const setUsers = (state, users) => {
//     return {
//         ...state,
//         users: [
//             ...state.users,
//             ...users.items
//         ],
//         totalCount: users.totalCount
//     }
// }

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

// const toggleLoading = (state, isLoading) => {
//     return {
//         ...state,
//         isLoading
//     }
// }

// const toggleFollow = (state, userId) => {
//     return {
//         ...state,
//         users: state.users.map(user => {
//             if(user.id === userId) {
//                 return {
//                     ...user,
//                     followed: !user.followed
//                 }
//             }
//             return user
//         })
//     }
// }

// const toggleFollowInProgress = (state, userId, isFetching) => {
//     return {
//         ...state,
//         followInProgress: isFetching ? [...state.followInProgress, userId]
//                                      : state.followInProgress.filter(id => id !== userId)
//
//     }
// }

export const toggleFollowing = (userId, followed) => dispatch => {
    dispatch(toggleFollowInProgress(userId, true));

    api.toggleFollow(userId, followed)
        .then(data => {
            dispatch(toggleFollowInProgress(userId, false));

            // if(data.response.status === 429){//превышено число разрешенных запросов
            //     alert('Сервер временно недоступен, попробуйте позже');
            //     return false;
            // }
            if(data.resultCode === 0){
                return dispatch(toggleFollow(userId))
            }
        }).catch(error => alert(error))
}

export const getUsers = (currentPage, pageSize) => dispatch => {
    dispatch(toggleLoading(true));
    api.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleLoading(false));
            dispatch(setUsers(data));
        })
}



const usersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users.items
                ],
                totalCount: action.users.totalCount
            }

        case CHANGE_PAGE_SIZE:
            return changePageSize(state, action.pageSize);

        case CHANGE_PAGE_NUMBER:
            return changePageNumber(state);

        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user
                })
            }


        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)

            }

        default:
            return state;
    }
}

export default usersReducer;