import React, { Component } from 'react';

import { connect } from 'react-redux';

import { setUsers, changePageSize, changePageNumber, toggleLoading, toggleFollow } from './../actions/users';
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
        this.api.toggleFollow(userId, followed)
            .then(({ resultCode, messages }) => resultCode === 0 ? this.props.toggleFollow(userId)
                                                                 : alert(messages[0])
            )
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
        const { users, totalCount, pageSize, pageSizeSteps, changePageSize, changePageNumber, isLoading } = this.props;

        const style = {
            height: '100vh',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

        //TODO исправить поведение спинера, он должен крутиться поверх всего
        // не заставляя перерисовываться компоненту полностью(слетает
        //

        if(isLoading) return(
                <div className='content-container' style={style}>
                    <Spiner />
                </div>
        );

        return (
            <UsersList users={users}
                       totalCount={totalCount}
                       pageSize={pageSize}
                       pageSizeSteps={pageSizeSteps}
                       changePageSize={changePageSize}
                       changePageNumber={changePageNumber}
                       toggleFollow={this._toggleFollow}/>

        )
    }
}

const mapStateToProps = ({ usersReducer: { users, currentPage, pageSize, pageSizeSteps, totalCount, isLoading } }) => {
    return { users, currentPage, pageSize, pageSizeSteps, totalCount, isLoading }
}

const mapDispatchToProps = { setUsers, changePageSize, changePageNumber, toggleLoading, toggleFollow }


export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
