import React, { Component } from 'react';

import { connect } from 'react-redux';

import { setUsers, changePageSize, changePageNumber } from './../actions/users';
import api from '../api/api';
import UsersList from '../components/users-list';

class UserListContainer extends Component {

    getUsers = () => {
        api.get('/users', {
            params: {
                page: this.props.currentPage,
                count: this.props.pageSize
            }
        })
        .then(response => {
            this.props.setUsers(response.data);
        })
    }

    componentDidMount() {
        this.getUsers();
    }

    componentDidUpdate(prevProps){
        if( (this.props.pageSize !== prevProps.pageSize) ||
            (this.props.currentPage !== prevProps.currentPage) )
        {
            this.getUsers();
        }
    }

    render() {
        const { users, totalCount, changePageSize, changePageNumber } = this.props;
        return (
            <UsersList users={users}
                       totalCount={totalCount}
                       changePageSize={changePageSize}
                       changePageNumber={changePageNumber}/>
        )
    }
}

const mapStateToProps = ({ usersReducer: { users, currentPage, pageSize, totalCount } }) => {
    return { users, currentPage, pageSize, totalCount }
}

const mapDispatchToProps = { setUsers, changePageSize, changePageNumber }


export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
