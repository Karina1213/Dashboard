import React from 'react';
import GetAllMessagesContainer from './GetAllMessagesContainer';
import GetAllThreadsContainer from '../../pages/MessagesPage';
import GetUserByIdContainer from './GetUserByIdContainer';

const MessagesPage: React.FC = () => {
    return (
        <div className='messages-container'>
            <div className='messages-container__threads'>
                <GetAllThreadsContainer/>
            </div>

            <div className=' messages-container__messages'>
                <GetAllMessagesContainer/>
            </div>

            <div className='messages-container__user-info'>
                <GetUserByIdContainer/>
            </div>
        </div>
    )
};

export default MessagesPage
