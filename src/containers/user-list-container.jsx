import React, { Component } from 'react';

import { connect } from 'react-redux';

import { setUsers } from './../actions/users';
import api from '../api/api';
import UsersList from '../components/users-list';

class UserListContainer extends Component {

    componentDidMount() {
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

    render() {
        const { users, totalCount } = this.props;
        return (
            <UsersList users={users} totalCount={totalCount}/>
        )
    }
}

const mapStateToProps = ({ usersReducer: { users, currentPage, pageSize, totalCount } }) => {
    return { users, currentPage, pageSize, totalCount }
}

const mapDispatchToProps = { setUsers }


export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
