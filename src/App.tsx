import React from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import ResetPassPage from './pages/ResetPassPage';
import LoginPage from './pages/LoginPage';
import {ApplicationComponent} from './components/messages/ApplicationComponent';

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Route path='/login' component={LoginPage}/>
            <Route exact path='/' component={SignUpPage}/>
            <Route path='/reset_password' component={ResetPassPage}/>

            <Route path='/threads' component={ApplicationComponent}/>
        </BrowserRouter>
    )
};

export default App;

