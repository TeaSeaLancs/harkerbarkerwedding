import React from 'react';
import { Route, IndexRedirect } from 'react-router'

import Welcome from './components/welcome';

export default store => {
    return (
        <Route path="/">
            <IndexRedirect to="welcome"/>
            <Route path="welcome" component={Welcome}/>
            <Route path="welcome/:id" component={Welcome}/>
        </Route>
    )
};