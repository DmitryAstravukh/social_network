import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../pages/profile';
import { getAuthUserData } from '../reducers/auth';

class ProfilePageContainer extends Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = ({ authReducer: { email, id, login, isAuth } }) => {
    return { email, id, login, isAuth }
}

const mapDispatchToProps = { getAuthUserData };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer);