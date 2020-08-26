import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {createThreadAction} from '../../redux/actions/messages/createThreadAction';
import Loading from '../projects/Loading';
import {getAllUsersAction} from '../../redux/actions/messages/getAllUsersAction';


interface IProps {
    allUsers?: any,
    createThread?: any,
    getAllUsersAction?: any,
    createThreadAction?: any,
    isLoading?: boolean,
}

class GetAllUsersContainer extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getAllUsersAction(`${axios.defaults.baseURL}/api/users/all`)
    }

    createThread(userId) {
        this.props.createThreadAction(`${axios.defaults.baseURL}/api/threads`, userId)
    }

    render() {
        let user = this.props.allUsers.map((user: any) =>
            <div className='user-card user-card--hovered'
                 onClick={() => this.createThread(user._id)}
                 key={user._id}>
                <div className='user-card__block'>
                    <span className='user-card__name'>{user.name}</span>
                    <p>{user.position}</p>
                </div>
                <div className='user-card__phone'>
                    <p>{user.phone}</p>
                </div>
            </div>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{user}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        allUsers: state.allUsers,
        createThread: state.createThread,
        isLoading: state.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllUsersAction: (url: string) => dispatch(getAllUsersAction(url)),
        createThreadAction: (url: string, userId: string) => dispatch(createThreadAction(url, userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllUsersContainer);