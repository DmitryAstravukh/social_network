import React, { Component } from 'react';

import { connect } from 'react-redux';

import { setUsers, changePageSize, changePageNumber, toggleLoading } from './../actions/users';
import api from '../api/api';
import UsersList from '../components/users-list';
import Spiner from '../components/spiner';

class UserListContainer extends Component {

    getUsers = () => {
        api.get('/users', {
            withCredentials: true,
            params: {
                page: this.props.currentPage,
                count: this.props.pageSize
            }
        })
        .then(response => {
            this.props.toggleLoading(false);
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
            this.props.toggleLoading(true);
            this.getUsers();
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
                       changePageNumber={changePageNumber}/>

        )
    }
}

const mapStateToProps = ({ usersReducer: { users, currentPage, pageSize, pageSizeSteps, totalCount, isLoading } }) => {
    return { users, currentPage, pageSize, pageSizeSteps, totalCount, isLoading }
}

const mapDispatchToProps = { setUsers, changePageSize, changePageNumber, toggleLoading }


export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
