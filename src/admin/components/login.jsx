/* globals FormData */

import styles from '../css/login.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DocumentTitle from 'react-document-title';

import { login } from '../actions/user';

class Login extends Component {
    render() {
        return (
            <DocumentTitle title="Login - Harker/Barker Wedding Admin">
                <div className={styles.login}>
                    <Paper zDepth={1} className={styles.loginBox}>
                        <h1>Harker/Barker wedding admin</h1>
                        <form className={styles.loginArea} onSubmit={event => this.login(event)} ref="form">
                            <div className={styles.loginError}>{this.props.errorMessage || ""}</div>
                            <TextField name="username" floatingLabelText="Username" required="true"></TextField>
                            <TextField name="password" floatingLabelText="Password" type="password" required="true"></TextField>
                            <RaisedButton 
                                fullWidth={true} 
                                label="Login" 
                                primary={true} 
                                type="submit"
                                className={styles.loginButton} 
                                disabled={!!this.props.loggingIn}></RaisedButton>
                        </form>
                    </Paper>
                </div>
            </DocumentTitle>
        );
    }
    
    login(event) {
        event.preventDefault();
		this.props.login(new FormData(this.refs.form));
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: !!state.user.loggingIn,
        errorMessage: state.user.loginError
    };
};

const mapDispatchToProps = dispatch => {
    
    const doLogin = data => dispatch(login(data)).then(() => {
        dispatch(push('/dashboard'));
    }).catch(err => console.error(err));
    
	return {
		login: doLogin
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);