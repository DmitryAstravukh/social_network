import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = ({ authReducer: { isAuth } }) => {
    return { isAuth }
}

export const WithAuthRedirect = Component => {
    class WrappedComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps, {})(WrappedComponent);
}