import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import BigWelcome from './components/bigWelcome';

export default () => {
    return (
        <Route path="/">
            <IndexRedirect to="welcome"/>
            <Route path="welcome(/:id)" component={BigWelcome}></Route>
        </Route>
    );
};