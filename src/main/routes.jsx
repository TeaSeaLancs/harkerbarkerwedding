import React from 'react';
import { Route } from 'react-router'

import Welcome from './components/welcome';

export default store => {
    return (
        <Route path="/">
            <Route path="welcome/:id" component={Welcome}/>
        </Route>
    )
};