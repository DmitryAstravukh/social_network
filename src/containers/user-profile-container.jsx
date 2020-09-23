import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/user-profile';
import { withRouter } from 'react-router-dom';
import api from '../api/api';

import { setUserProfileData } from './../actions/profile';
import Spiner from '../components/spiner';

class UserProfileContainer extends Component {

    //TODO падает в ошибку когда не успевает сделать запрос на auth/me
    getUserData = () => {
        let userId = this.props.match.params.userId;

        api.get(`/profile/${userId}`)
            .then(response => {
                this.props.setUserProfileData(response.data);
            })
    }

    componentDidMount() {
        this.getUserData();
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