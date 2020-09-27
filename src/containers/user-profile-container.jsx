import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/user-profile';

import Spiner from '../components/spiner';
import { getUserData, getUserStatus, updateUserStatus } from '../reducers/profile';
import { WithAuthRedirect } from './../hoc/withAuthRedirect';
import {compose} from 'redux';

class UserProfileContainer extends Component {
    userId = this.props.match.params.userId;

    componentDidMount() {
        this.props.getUserData(this.userId);
        this.props.getUserStatus(this.userId);
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.props.getUserData(this.userId)
        }
    }

    render() {
        const { userData, isLoadedUserData, status, updateUserStatus } = this.props;

        if(!isLoadedUserData) return <Spiner />

        return <UserProfile userData={userData} status={status} updateUserStatus={updateUserStatus}/>

    }
}

const mapStateToProps = ({ profileReducer: { userData, isLoadedUserData, status }}) => {
    return { userData, isLoadedUserData, status }
}

const mapDispatchToProps = { getUserData, getUserStatus, updateUserStatus };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // WithAuthRedirect
)(UserProfileContainer);