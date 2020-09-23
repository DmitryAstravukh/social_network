import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../api/api';

import { setAuthUserData } from './../actions/auth';
import Profile from '../pages/profile';
import Spiner from '../components/spiner';

class ProfilePageContainer extends Component {

    getAuthUserData = () => {
        api.get(`/auth/me`, {
            withCredentials: true
        })
        .then(response => {
            this.props.setAuthUserData(response.data.data);
        })
    }

    componentDidMount() {
        this.getAuthUserData();
    }

    render() {
        const { login, id, isAuth } = this.props;

        if(!isAuth){
            return <Spiner />
        }

        return (
            <Profile login={login} id={id}/>
        )
    }
}

const mapStateToProps = ({ authReducer: { email, id, login, isAuth } }) => {
    return { email, id, login, isAuth }
}

const mapDispatchToProps = { setAuthUserData };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer);