import React, {Component, Fragment} from 'react';
import './content.scss';
import News from '../news';
import { Route } from 'react-router-dom';
import Messages from '../messages';
import UsersListContainer from '../../containers/user-list-container';
import UserProfileContainer from '../../containers/user-profile-container';

export  default class Content extends Component {
    render() {
        return (
            <Fragment>
                <Route path='/news' component={News}></Route>
                <Route path='/messages' component={Messages}></Route>
                <Route path='/users' component={UsersListContainer}></Route>
                <Route path='/profile' component={UserProfileContainer}></Route>
                <Route path='/profile/:userId' component={UserProfileContainer}></Route>
            </Fragment>

        )
    }
}