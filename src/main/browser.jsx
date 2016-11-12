/* global window document */

import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import theme from '../util/theme';

import reducers from './reducers';
import createStore from '../util/createStore';
import getRoutes from './routes';
import { createAndLoadFor } from '../util/loadComponentNeeds';

const preloadedState = window.__PRELOADED__STATE__;

const allReducers = combineReducers(Object.assign({routing: routerReducer}, reducers));
const store = createStore(allReducers, preloadedState, applyMiddleware(routerMiddleware(browserHistory)));
const history = syncHistoryWithStore(browserHistory, store);

window.store = store;

const app = (
    <Provider store={store}>
        <MuiThemeProvider theme={getMuiTheme(theme)}>
            <Router history={history} routes={getRoutes(store)} createElement={createAndLoadFor(store)} />
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(app, document.querySelector("#react-main"));