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

const App = () => {
    const dispatch = useDispatch();
    const { id, login, isAuth } = useSelector(({ authReducer }) => authReducer);
    useEffect(() => {
        dispatch(getAuthUserData())
    },[])

    return (
        <div className='app'>
            <Header login={login} id={id} isAuth={isAuth}/>
            <div className='content'>
                <Navbar id={id}/>
                <Switch>
                    <Route path='/news' render={() => <News/>}></Route>
                    <Route path='/messages' render={() => <Messages/>}></Route>
                    <Route path='/users' render={() => <UsersList/>}></Route>
                    <Route path='/profile/:userId' render={() => <UserProfile/>}></Route>
                    <Route path='/login' render={() => <Login/>}></Route>
                </Switch>
            </div>
        </div>
    )
}

export default App;
