import React, {Fragment} from 'react';
import './app.scss';
import Login from '../../pages/login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import ProfilePageContainer from '../../containers/profile-page-container';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="app">
                    <Switch>
                        {/*<Login />*/}
                        {/*<Profile/>*/}

                        {/*<Route path='/' render={() => <Login />}></Route>*/}
                        {/*<Route path='/login' render={() => alert('login')}></Route>*/}
                        {/*<Route path='/news' component={News}></Route>*/}
                        {/*<Route path='/messages' component={Messages}></Route>*/}
                        {/*<Route path='/users' component={UsersListContainer}></Route>*/}
                        {/*<Route path='/profile/:userId' component={UserProfileContainer}></Route>*/}
                        <ProfilePageContainer />
                    </Switch>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
