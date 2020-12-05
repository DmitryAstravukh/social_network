import { UsersInitialState, usersReducer } from "../../reducers/users"
import {toggleFollow} from "../../actions/users";

let state: UsersInitialState;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                name: 'user 0',
                followed: false,
                photos: {
                    small: null,
                    large: null
                },
                status: 'user 0 status'
            },
            {
                id: 1,
                name: 'user 1',
                followed: false,
                photos: {
                    small: null,
                    large: null
                },
                status: 'user 1 status'
            },
            {
                id: 2,
                name: 'user 2',
                followed: false,
                photos: {
                    small: null,
                    large: null
                },
                status: 'user 2 status'
            },
            {
                id: 3,
                name: 'user 3',
                followed: false,
                photos: {
                    small: null,
                    large: null
                },
                status: 'user 3 status'
            }
        ],
        currentPage: 1,
        pageSize: 10,
        pageSizeSteps: [10, 20, 50, 100],
        totalCount: 0,
        isLoading: true,
        followInProgress:[],
        error: null
    }
})

test("toggleFollowTest", () => {
    const newState = usersReducer(state, toggleFollow(1));

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
})