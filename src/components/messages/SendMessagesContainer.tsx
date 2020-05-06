import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Button} from '../common/Button';
import {sendMessagesAction} from '../../redux/actions/messages/sendMessageActions';

interface IState {
    message?: any,
}

interface IProps {
    sendMessage?: string,
    sendMessagesAction?: any,
}

class SendMessagesContainer extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const {value} = event.target;
        this.setState({
            message: value
        })
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const {message} = this.state;
        this.props.sendMessagesAction(`${axios.defaults.baseURL}/api/threads/messages`, message);
        this.setState({
            message: ''
        })

    };

    render() {
        const {message} = this.state;

        return (
            <div className="form-send-mess-container">
                <form className="send-message__form"
                      name='message__form'
                      onSubmit={this.handleSubmit}>
                    <textarea className='send-message__textarea'
                              name="textarea"
                              placeholder='Write a message'
                              value={message}
                              onChange={this.handleChange}> </textarea>
                    <Button disabled={!message} type="submit">
                        Send
                    </Button>
                </form>

            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        sendMessage: state.sendMessage,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessagesAction: (url: string, message: string) => dispatch(sendMessagesAction(url, message)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessagesContainer);


