import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function middleware() {
    return applyMiddleware(thunk);
}

function create(reducer, state, enhancer) {
    enhancer = enhancer ? compose(enhancer, middleware()) : middleware();
    return createStore(reducer, state, compose(enhancer, applyMiddleware(thunk)));
}

export default create;