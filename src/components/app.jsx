import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

import { routes } from '../util/routes';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory} routes={routes} />
        )
    }
}

export default App;