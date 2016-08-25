import React from 'react';
import { Route, IndexRoute } from 'react-router'

import Dashboard from './components/dashboard';

const routes = (
    <Route path="/">
        <IndexRoute component={Dashboard}/>
    </Route>
)

export default routes;