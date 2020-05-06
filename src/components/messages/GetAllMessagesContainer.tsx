import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from '../projects/Loading';
import CardCreatMessages from './CardCreatMessages';

interface IProps {
    sendMessage?: string,
    allMessages?: any,
    isLoading?: boolean,
}

class GetAllMessagesContainer extends Component <IProps, {}> {

    render() {

        let getAllMessage = this.props.allMessages.map((message: any) =>
            <CardCreatMessages {...message} key={message._id}/>);
        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {getAllMessage} </>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        sendMessage: state.sendMessage,
        allMessages: state.allMessages,
        isLoading: state.isLoading,
    };
};

export default connect(mapStateToProps, null)(GetAllMessagesContainer);