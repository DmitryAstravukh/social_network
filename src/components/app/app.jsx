import React from 'react';
import './app.scss';
import Login from '../../pages/login';
import Profile from '../../pages/profile';
import {BrowserRouter} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <div className="app">
                {/*<Login />*/}
                <Profile/>
            </div>
        </BrowserRouter>
    );
}

export default App;
