import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import Dashboard from './components/dashboard';
import Login from './components/login';

export default store => {
    const requireAuth = (nextState, replace, callback) => {
        const { user } = store.getState();
        if (!user.session) {
            replace('/login'); 
        }
        
        callback();
    };

    return (
        <Route path="/">
            <IndexRedirect to="/dashboard"/>
            <Route path="login" component={Login}/>
            <Route path="dashboard" onEnter={requireAuth}>
                <IndexRoute component={Dashboard}/>
            </Route>
        </Route>
    );
};