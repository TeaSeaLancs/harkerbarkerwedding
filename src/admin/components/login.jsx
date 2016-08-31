/* globals FormData */

import styles from '../css/login.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { login } from '../actions/user';

class Login extends Component {
    render() {
        return (
            <div className={styles.login}>
                <Paper zDepth={1} className={styles.loginBox}>
                    <h1>Harker/Barker wedding admin</h1>
                    <form className={styles.loginArea} onSubmit={event => this.login(event)} ref="form">
                        <TextField name="username" floatingLabelText="Username" required="true"></TextField>
                        <TextField name="password" floatingLabelText="Password" type="password" required="true"></TextField>
                        <RaisedButton fullWidth={true} label="Login" primary={true} type="submit" className={styles.loginButton}></RaisedButton>
                    </form>
                </Paper>
            </div>
        )
    }
    
    login(event) {
        event.preventDefault();
		this.props.login(new FormData(this.refs.form));
    }
}

const mapDispatchToProps = dispatch => {
	return {
		login: data => dispatch(login(data))
	}
}

export default connect(undefined, mapDispatchToProps)(Login);