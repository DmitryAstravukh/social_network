import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/user-profile';
import { withRouter } from 'react-router-dom';

import Spiner from '../components/spiner';
import { getUserData } from '../reducers/profile';
import { WithAuthRedirect } from './../hoc/withAuthRedirect';
import {compose} from 'redux';

class UserProfileContainer extends Component {

    componentDidMount() {
        this.props.getUserData(this.props.match.params.userId)
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.props.getUserData(this.props.match.params.userId)
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

const mapDispatchToProps = { getUserData };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // WithAuthRedirect
)(UserProfileContainer);