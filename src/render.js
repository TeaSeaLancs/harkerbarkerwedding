const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const { combineReducers } = require('redux');

const serverRender = require('./util/serverRender');
const html = require('./util/html');
const loadComponentNeeds = require('./util/loadComponentNeeds').default;

const createStore = require('./util/createStore').default;

const match = data => new Promise(resolve => {
   return ReactRouter.match(data, (error, redirectLocation, renderProps) => resolve([error, redirectLocation, renderProps]));
});

module.exports = (name, getRoutes, reducers) => {
    const reducer = combineReducers(reducers);
    
    return function* render(next) {
        console.log(this.session.user);
        const store = createStore(reducer, {});
        const routes = getRoutes(store);
        
        const [error, redirectLocation, renderProps] = yield match({routes, location: this.url});
        if (error) {
            this.throw(error.message, 500);
        } else if (redirectLocation) {
            this.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            const userAgent = this.request.header['user-agent'];
            yield loadComponentNeeds(store, renderProps.components, renderProps.params);
            const body = ReactDOMServer.renderToString(serverRender(store, renderProps, userAgent));
            this.body = html(name, body, store.getState());
        }
        
        yield next;
    }
}