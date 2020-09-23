import React from 'react';
import './app.scss';
import Login from '../../pages/login';
import Profile from '../../pages/profile';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import ProfilePageContainer from '../../containers/profile-page-container';


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="app">
                    {/*<Login />*/}
                    {/*<Profile/>*/}
                    <ProfilePageContainer />
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
