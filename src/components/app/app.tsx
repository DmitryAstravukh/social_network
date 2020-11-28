import React, { useEffect, Suspense, FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from "../../store";
import { initApp } from '../../reducers/init';

import Spinner from '../spinner';

import './app.scss';

const Login = React.lazy(() => import('../login'));
const Header = React.lazy(() => import('../header'));
const Navbar = React.lazy(() => import('../navbar'));
const UsersList = React.lazy(() => import('../users-list'));
const UserProfile = React.lazy(() => import('../user-profile'));
const News = React.lazy(() => import('../news'));
const Messages = React.lazy(() => import('../messages'));

const App: FC = () => {
    const dispatch = useDispatch();
    const { isInit } = useSelector((state: StateType) => state.initReducer);
    useEffect(() => {
        dispatch(initApp())
    },[dispatch])

    if(!isInit) return <Spinner />
    return (
        <div className='app'>
            <Suspense fallback={<Spinner />}>
                <Header />
                <div className='content'>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={UserProfile} />
                        <Route path='/news' component={News} />
                        <Route path='/messages' component={Messages} />
                        <Route path='/users' component={UsersList} />
                        <Route path='/profile/:userId' component={UserProfile} />
                        <Route path='/login' component={Login} />
                        <Route path='*'><h1>404 Not Found</h1></Route>
                    </Switch>
                </div>
            </Suspense>
        </div>
    )
}

export default App;
