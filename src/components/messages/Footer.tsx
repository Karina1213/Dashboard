import React from 'react';
import {ModalWindowNewConvers} from './ModalWindowNewConvers'
import GetAllUsersContainer from './GetAllUsersContainer';
import SendMessagesContainer from './SendMessagesContainer';

export const Footer = () => {

    return (
        <footer className='footer-container'>
            <div className='new-conversation'>
                <ModalWindowNewConvers>
                    <GetAllUsersContainer/>
                </ModalWindowNewConvers>

                <SendMessagesContainer/>
            </div>
        </footer>
    )
};