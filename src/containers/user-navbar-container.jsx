import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserNavbar from '../components/user-navbar';
import api from '../api/api';

import { setAuthUserData } from './../actions/auth';

class UserNavbarContainer extends Component {

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
        const {login, id} = this.props;
        return (
            <UserNavbar login={login} id={id}/>
        )
    }
}

const mapStateToProps = ({ authReducer: { email, id, login } }) => {
    return { email, id, login }
}

const mapDispatchToProps = { setAuthUserData };

export default connect(mapStateToProps, mapDispatchToProps)(UserNavbarContainer);