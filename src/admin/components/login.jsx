import '../css/login.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <Paper zDepth={1} className="loginBox">Login</Paper>
            </div>
        )
    }
}

export default Login;