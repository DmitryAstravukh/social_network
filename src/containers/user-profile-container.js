import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/user-profile';
import { withRouter } from 'react-router-dom';
import api from '../api/api';

import { setUserProfileData } from './../actions/profile';

class UserProfileContainer extends Component {

    getUserData = () => {
        const userId = this.props.match.params.userId;
        api.get(`/profile/${userId}`)
            .then(response => {
                debugger;
                this.props.setUserProfileData(response.data);
            })
    }

    componentDidMount() {
        this.getUserData();
    }


    render() {
        return (
            <UserProfile userData={this.props.userData}/>
        )
    }
}

const mapStateToProps = ({ profileReducer: { userData } }) => {
    return { userData }
}

const mapDispatchToProps = { setUserProfileData };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfileContainer));