import styles from '../css/login.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

class Login extends Component {
    render() {
        return (
            <div className={styles.login}>
                <Paper zDepth={1} className={styles.loginBox}>Login</Paper>
            </div>
        )
    }
}

export default Login;