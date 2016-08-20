import React from 'react';
import { Route } from 'react-router'

import Dashboard from './components/dashboard';

const routes = (
    <Route path="/" component={Dashboard}></Route>
)

export default routes;