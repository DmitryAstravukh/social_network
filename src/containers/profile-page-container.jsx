import React, { Component } from 'react';
import { connect } from 'react-redux';


import Profile from '../pages/profile';
import Spiner from '../components/spiner';
import { getAuthUserData } from '../reducers/auth';


class ProfilePageContainer extends Component {

    //TODO добавить редирект на логин при пустых данных
    componentDidMount() {
        this.props.getAuthUserData();
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

const mapDispatchToProps = { getAuthUserData };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer);