import React from 'react'
import {Header} from '../common/Header';
import {Sidebar} from '../common/Sidebar';
import {SortRow} from '../projects/Sort';
import {BrowserRouter, Route} from 'react-router-dom';
import ProjectsList from '../projects/ProjectsList';
import {MessagesContainer} from './MessagesContainer';

export const ApplicationComponent: React.FC = () => {

    return (
        <BrowserRouter>
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
}