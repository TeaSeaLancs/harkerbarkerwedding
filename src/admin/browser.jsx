/* global window document */

import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './reducers/app';
import createStore from '../util/createStore';
import routes from './routes';
import { createAndLoadFor } from '../util/loadComponentNeeds';

const preloadedState = window.__PRELOADED__STATE__;

const allReducers = combineReducers(Object.assign({routing: routerReducer}, reducers));
const store = createStore(allReducers, preloadedState);
const history = syncHistoryWithStore(browserHistory, store);

const app = (
    <Provider store={store}>
        <Router history={history} routes={routes} createElement={createAndLoadFor(store)} />
    </Provider>
);

ReactDOM.render(app, document.querySelector("#react-main"));