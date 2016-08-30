import React from 'react';
import { Route, IndexRoute } from 'react-router'

import Dashboard from './components/dashboard';
import Login from './components/login';

export default store => {
    const requireAuth = (nextState, replace, callback) => {
        const { user } = store.getState();
        if (!user.username) {
            console.log("Lol nope");
            replace('/login');
            callback(); 
        }
    }

    return (
        <Route path="/">
            <IndexRoute component={Dashboard} onEnter={requireAuth}/>
            <Route path="login" component={Login}/>
        </Route>
    )
};