import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/user-profile';
import { withRouter } from 'react-router-dom';

import { setUserProfileData } from './../actions/profile';
import Spiner from '../components/spiner';
import Api from '../api/api';

class UserProfileContainer extends Component {

    api = new Api();

    _getUserData = () => {
        let userId = this.props.match.params.userId;

        this.api.getUserData(userId)
            .then(data => this.props.setUserProfileData(data));
    }

    componentDidMount() {
        this._getUserData();
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this._getUserData();
        }
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