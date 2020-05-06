import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getThreadIdAction} from '../redux/actions/messages/messagesActionCreators';
import Loading from '../components/projects/Loading';
import {getUserByIdAction} from '../redux/actions/messages/getUserByIdAction';
import {getAllThreadsAction} from '../redux/actions/messages/getAllThreadsActions';
import {getAllMessagesAction} from '../redux/actions/messages/getAllMessagesAction';
import {getCurrentUserAction} from '../redux/actions/auth/getCurrentUserAction';

interface IProps {
    allThreads?: any,
    getUserByIdAction?: any,
    getAllThreadsAction?: any,
    getAllMessagesAction?: any,
    isLoading?: boolean,
    getThreadIdAction?: any,
    getCurrentUserAction?:any,
}

class MessagesPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getAllThreadsAction();
        this.props.getCurrentUserAction();
    };

    getAllMessages(threadId, firstUserId, secondUserId) {
        this.props.getAllMessagesAction(threadId);
        this.props.getThreadIdAction(threadId);

        firstUserId === localStorage.getItem('currentUserId')
            ? this.props.getUserByIdAction(secondUserId)
            : this.props.getUserByIdAction(firstUserId)
    }

    render() {
        let currentUserId = localStorage.getItem('currentUserId');

        let threads = this.props.allThreads.map((thread: any) =>
            <div className='threads-card threads-card--hovered'
                 onClick={() => this.getAllMessages(thread._id, thread.users[0]._id, thread.users[1]._id)}
                 key={thread._id}>
                <div className='threads-card__block'>
                    <div className='threads-card__name'>
                        <i className='threads-card__img fa fa-user-secret fa-2x'> </i>
                        {thread.users.length === 2 && thread.users[0]._id === currentUserId
                            ? <span>{thread.users[1].name}</span>
                            : <span>{thread.users[0].name}</span>}
                    </div>
                    <div className='threads-card__updated-at'>
                        {thread.updated_at.slice(2, 10)}
                    </div>
                </div>
            </div>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{threads}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        allThreads: state.allThreads,
        isLoading: state.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getCurrentUserAction: () =>dispatch( getCurrentUserAction()),
        getAllThreadsAction: () => dispatch(getAllThreadsAction()),
        getAllMessagesAction: (threadId: string) => dispatch(getAllMessagesAction(threadId)),
        getUserByIdAction: (userById: string) => dispatch(getUserByIdAction(userById)),
        getThreadIdAction: (threadId: string) => dispatch(getThreadIdAction(threadId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);