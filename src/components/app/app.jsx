import React, { useEffect } from 'react';
import './app.scss';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../../pages/login';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import Navbar from '../navbar';
import Content from '../content';
import { getAuthUserData } from './../../reducers/auth';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getAuthUserData()),[])

    const { email, id, login, isAuth } = useSelector(({ authReducer }) => authReducer);

    return (
        <div className='app'>
            <Header login={login} id={id} isAuth={isAuth}/>
            <div className='content'>
                <Navbar id={id}/>
                <Content />
            </div>

            <Switch>
                {/*<Login />*/}
                {/*<Profile/>*/}

                {/*<Route path='/' render={() => <Login />}></Route>*/}
                {/*<Route path='/login' render={() => alert('login')}></Route>*/}
                {/*<Route path='/news' component={News}></Route>*/}
                {/*<Route path='/messages' component={Messages}></Route>*/}
                {/*<Route path='/users' component={UsersListContainer}></Route>*/}
                {/*<Route path='/profile/:userId' component={UserProfileContainer}></Route>*/}
                {/*<ProfilePageContainer />*/}
            </Switch>
        </div>
    )
}

export default App;
