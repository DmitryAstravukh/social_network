import React, { Component } from 'react';

import { connect } from 'react-redux';

import { changePageSize, changePageNumber } from './../actions/users';
import UsersList from '../components/users-list';

import { toggleFollowing, getUsers } from '../reducers/users';

class UserListContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    componentDidUpdate(prevProps){
        if( (this.props.pageSize !== prevProps.pageSize) ||
            (this.props.currentPage !== prevProps.currentPage) )
        {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
        }
    }

    render() {
        const { users, totalCount, pageSize, pageSizeSteps,
                changePageSize, changePageNumber, isLoading, followInProgress,
                toggleFollowing } = this.props;

        return (
            <UsersList users={users}
                       totalCount={totalCount}
                       pageSize={pageSize}
                       pageSizeSteps={pageSizeSteps}
                       changePageSize={changePageSize}
                       changePageNumber={changePageNumber}
                       isLoading={isLoading}
                       toggleFollowing={toggleFollowing}
                       followInProgress={followInProgress}/>

        )
    }
}

const mapStateToProps = ({ usersReducer: { users, currentPage, pageSize, pageSizeSteps, totalCount, isLoading, followInProgress } }) => {
    return { users, currentPage, pageSize, pageSizeSteps, totalCount, isLoading, followInProgress }
}

const mapDispatchToProps = { changePageSize, changePageNumber, toggleFollowing, getUsers }


export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
