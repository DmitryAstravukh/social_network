import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/user-profile';
import { withRouter } from 'react-router-dom';
import api from '../api/api';

import { setUserProfileData } from './../actions/profile';

class UserProfileContainer extends Component {

    //TODO падает в ошибку когда не успевает сделать запрос на auth/me
    getUserData = () => {
        let userId;
        if(this.props.match.params.userId){
            userId = this.props.match.params.userId;
        }
        else if(this.props.isAuth) {
            userId = this.props.id;
        }

        api.get(`/profile/${userId}`)
            .then(response => {
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

const mapStateToProps = ({ profileReducer: { userData }, authReducer: { isAuth, id } }) => {
    return { userData, isAuth, id }
}

const mapDispatchToProps = { setUserProfileData };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfileContainer));