import React, { Component } from 'react';

import { connect } from 'react-redux';

import { setUsers, changePageSize, changePageNumber, toggleLoading, toggleFollow, toggleFollowInProgress } from './../actions/users';
import UsersList from '../components/users-list';
import Spiner from '../components/spiner';
import Api from '../api/api';

class UserListContainer extends Component {

    api = new Api();

    _getUsers = () => {
        this.api.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleLoading(false);
                this.props.setUsers(data);
            })
    }

    _toggleFollow = (userId, followed) => {
        this.props.toggleFollowInProgress(userId, true);
        this.api.toggleFollow(userId, followed)
            .then(data => {
                this.props.toggleFollowInProgress(userId, false);
                if(data.response.status === 429){//превышено число разрешенных запросов
                    alert('Сервер временно недоступен, попробуйте позже');
                    return false;
                }
                if(data.resultCode === 0){
                    return this.props.toggleFollow(userId)
                }
            })
    }

    componentDidMount() {
        this._getUsers();
    }

    componentDidUpdate(prevProps){
        if( (this.props.pageSize !== prevProps.pageSize) ||
            (this.props.currentPage !== prevProps.currentPage) )
        {
            this.props.toggleLoading(true);
            this._getUsers();
        }
    }

    render() {
        const { users, totalCount, pageSize, pageSizeSteps,
                changePageSize, changePageNumber, isLoading, followInProgress } = this.props;

        return (
            <UsersList users={users}
                       totalCount={totalCount}
                       pageSize={pageSize}
                       pageSizeSteps={pageSizeSteps}
                       changePageSize={changePageSize}
                       changePageNumber={changePageNumber}
                       isLoading={isLoading}
                       toggleFollow={this._toggleFollow}
                       followInProgress={followInProgress}/>

        )
    }
}

const mapStateToProps = ({ usersReducer: { users, currentPage, pageSize, pageSizeSteps, totalCount, isLoading, followInProgress } }) => {
    return { users, currentPage, pageSize, pageSizeSteps, totalCount, isLoading, followInProgress }
}

const mapDispatchToProps = { setUsers, changePageSize, changePageNumber, toggleLoading, toggleFollow, toggleFollowInProgress }


export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
