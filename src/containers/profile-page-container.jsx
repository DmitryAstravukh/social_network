import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAuthUserData } from './../actions/auth';
import Profile from '../pages/profile';
import Spiner from '../components/spiner';
import Api from '../api/api';

class ProfilePageContainer extends Component {

    api = new Api();

    componentDidMount() {
        this.api.getAuthUserData()
            .then(({ data }) => {
                this.props.setAuthUserData(data);
            })
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