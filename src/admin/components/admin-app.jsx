import React, { Component } from 'react';
import { Router } from 'react-router';

import routes from '../routes';

class App extends Component {
    render() {
        return (
            <Router history={this.props.history} routes={routes} />
        )
    }
}

export default App;