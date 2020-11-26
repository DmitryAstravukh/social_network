import React, { useEffect, Suspense } from 'react';
import './app.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { initApp } from '../../reducers/init';
import Spiner from '../spiner';

const Login = React.lazy(() => import('../login'));
const Header = React.lazy(() => import('../header'));
const Navbar = React.lazy(() => import('../navbar'));
const UsersList = React.lazy(() => import('../users-list'));
const UserProfile = React.lazy(() => import('../user-profile'));
const News = React.lazy(() => import('../news'));
const Messages = React.lazy(() => import('../messages'));

const App = () => {
    const dispatch = useDispatch();
    const { isInit } = useSelector(({ initReducer }) => initReducer);
    useEffect(() => {
        dispatch(initApp())
    },[dispatch])

    if(!isInit) return <Spiner />
    return (
        <div className='app'>
            <Suspense fallback={<Spiner />}>
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
