import React, {Component, Fragment} from 'react';
import './content.scss';
import News from '../news';
import { Route } from 'react-router-dom';
import Messages from '../messages';
import UsersList from '../users-list';

export  default class Content extends Component {
    render() {
        return (
            <Fragment>
                <Route path='/news' component={News}></Route>
                <Route path='/messages' component={Messages}></Route>
                <Route path='/users' component={UsersList}></Route>
            </Fragment>

        )
    }
}