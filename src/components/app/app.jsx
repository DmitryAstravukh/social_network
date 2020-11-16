import React, { useEffect } from 'react';
import './app.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getAuthUserData } from './../../reducers/auth';

import Login from '../login';
import Header from '../header';
import Navbar from '../navbar';
import News from '../news';
import Messages from '../messages';
import { UsersList } from '../users-list/users-list';
import { UserProfile } from '../user-profile/user-profile';
import { inicializeApp } from '../../reducers/inicialize';
import Spiner from '../spiner';

const App = () => {
    const dispatch = useDispatch();
    const { isInicialized } = useSelector(({ inicializeReducer }) => inicializeReducer);
    useEffect(() => {
        dispatch(inicializeApp())
    },[dispatch])

    if(!isInicialized) return <Spiner />
    return (
        <div className='app'>
            <Header />
            <div className='content'>
                <Navbar />
                <Switch>
                    <Route exact path='/'><UsersList/></Route>
                    <Route path='/news'><News/></Route>
                    <Route path='/messages'><Messages/></Route>
                    <Route path='/users'><UsersList/></Route>
                    <Route path='/profile/:userId'><UserProfile/></Route>
                    <Route path='/login'><Login/></Route>
                    <Route path='*'><h1>404 Not Found</h1></Route>
                </Switch>
            </div>
        </div>
    )
}

export default App;
