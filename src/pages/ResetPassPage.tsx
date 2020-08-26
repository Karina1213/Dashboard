import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {resetPassAction} from '../redux/actions/auth/resetPassActions';
import {Button} from '../components/common/Button';
import {ConfirmPassInput} from '../components/auth/ConfirmPassInput';
import {EmailInput} from '../components/auth/EmailInput';
import {PasswordInput} from '../components/auth/PasswordInput';

interface IState {
    email?: string,
    password?: string,
    confirmationPassword?: string
}

interface IProps {
    email?: string,
    password?: string,
    authenticationError?: boolean,
    resetPassAction?: any,
    authenticated?: boolean

}

class ResetPassPage extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmationPassword: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event: any) {
        const {email, password, confirmationPassword} = this.state;
        event.preventDefault();
        this.props.resetPassAction(`${axios.defaults.baseURL}/api/users/reset_password`, email, password, confirmationPassword);
    };

    render() {
        const {email, password, confirmationPassword} = this.state;

        return (
            <div className="auth-container">
                <h2 className="auth-container__title">
                    Reset password
                </h2>
                <NavLink className='auth-navigation' to='/login'>
                    Log in
                </NavLink>
                <form className="form"
                      name="form"
                      onSubmit={this.handleSubmit}>
                    <EmailInput name="email"
                                type="email"
                                value={email}
                                onChange={this.handleChange}/>
                    <PasswordInput name="password"
                                   value={password}
                                   onChange={this.handleChange}
                                   type="password"/>
                    <ConfirmPassInput name="confirmationPassword"
                                      value={confirmationPassword}
                                      onChange={this.handleChange}
                                      type="password"/>
                    <Button type="submit">OK</Button>
                </form>
                <div className='helpers'>
                    {this.props.authenticated ? (<Redirect to='/login'/>) : null}
                    {this.props.authenticationError ? (<p>Invalid fields, try again</p>) : null}
                </div>
            </div>

        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        resetPassAction: (url: string, email: string, password: string, confirmationPassword: string) =>
            dispatch( resetPassAction(url, email, password, confirmationPassword))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassPage);


