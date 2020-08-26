import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {NavLink, Redirect} from "react-router-dom";
import {Button} from '../components/common/Button';
import {NameInput} from '../components/auth/NameInput';
import {EmailInput} from '../components/auth/EmailInput';
import {PasswordInput} from '../components/auth/PasswordInput';
import {signUpAction} from '../redux/actions/auth/signUpActions';

interface IState {
    name?: string,
    email?: string,
    password?: string,
}

interface IProps {
    name?: string,
    email?: string,
    password?: string,
    isLoading?: boolean,
    authenticationError?: boolean,
    authenticated?: boolean,
    signUpAction?: any,
}

class SignUpPage extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
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
        const {name, email, password} = this.state;
        event.preventDefault();
        this.props.signUpAction(`${axios.defaults.baseURL}/api/users/`, name, email, password);
    };

    render() {
        const {name, email, password} = this.state;
        return (
            <div className="auth-container">
                <h2 className="auth-container__title">
                    Sign Up
                </h2>
                <NavLink className='auth-navigation' to='/login'>
                    Log in
                </NavLink>
                <form className="form"
                      name="form"
                      onSubmit={this.handleSubmit}>
                    <NameInput name="name"
                               type="text"
                               value={name}
                               onChange={this.handleChange}/>
                    <EmailInput name="email"
                                type="email"
                                value={email}
                                onChange={this.handleChange}
                    />
                    <PasswordInput name="password"
                                   value={password}
                                   onChange={this.handleChange}
                                   type="password"
                    />
                    <Button type="submit">Sign up</Button>
                </form>
                <div className='helpers'>
                    <span className='loading'>
                        {this.props.isLoading ? <p>Loading...</p> : null}
                    </span>
                    {this.props.authenticated ? (<Redirect to='/login'/>) : null}
                    {this.props.authenticationError ? <p>Invalid fields, try again</p> : null}
                </div>
            </div>

        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        isLoading: state.isLoading,
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        signUpAction: (url: string, name: string, email: string, password: string) =>
            dispatch(signUpAction(url, name, email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);


