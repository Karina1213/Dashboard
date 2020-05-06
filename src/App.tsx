import React from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import ResetPassPage from './pages/ResetPassPage';
import LoginPage from './pages/LoginPage';
import {Header} from './components/common/Header';
import {Sidebar} from './components/common/Sidebar';
import {SortRow} from './components/projects/Sort';
import ProjectsList from './components/projects/ProjectsList';
import {MessagesContainer} from './components/messages/MessagesContainer';

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Route path='/login' component={LoginPage}/>
            <Route exact path='/' component={SignUpPage}/>
            <Route path='/reset_password' component={ResetPassPage}/>

            <Header/>
            <div className='main'>
                <Sidebar/>
                <div className='main__container'>
                    <SortRow/>

                    <Route path='/projects' component={ProjectsList}/>
                    <Route path='/threads' component={MessagesContainer}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;

