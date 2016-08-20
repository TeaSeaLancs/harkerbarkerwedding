/* global window document */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/admin-app';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from './reducers/app';

const preloadedState = window.__PRELOADED__STATE__;

const store = createStore(combineReducers(Object.assign({routing: routerReducer, reducers}, preloadedState)));
const history = syncHistoryWithStore(browserHistory, store);

const app = (
    <Provider store={store}>
        <App history={history}/>
    </Provider>
);

ReactDOM.render(app, document.querySelector("#react-main"));