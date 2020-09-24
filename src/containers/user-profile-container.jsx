import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/user-profile';
import { withRouter } from 'react-router-dom';

import { setUserProfileData } from './../actions/profile';
import Spiner from '../components/spiner';
import Api from '../api/api';

class UserProfileContainer extends Component {

    api = new Api();

    componentDidMount() {
        let userId = this.props.match.params.userId;

        this.api.getUserData(userId)
            .then(data => this.props.setUserProfileData(data));
    }


    render() {
        const { userData, isLoadedUserData } = this.props;

        if(!isLoadedUserData) return <Spiner />

        return <UserProfile userData={userData}/>

    }
}

const mapStateToProps = ({ profileReducer: { userData, isLoadedUserData }}) => {
    return { userData, isLoadedUserData }
}

const mapDispatchToProps = { setUserProfileData };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfileContainer));