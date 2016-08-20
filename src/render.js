const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');

const serverRender = require('./util/serverRender');
const html = require('./util/html');

const match = data => new Promise(resolve => {
   return ReactRouter.match(data, (error, redirectLocation, renderProps) => resolve([error, redirectLocation, renderProps]));
});

module.exports = (name, routes) => function* render(next) {
    const [error, redirectLocation, renderProps] = yield match({routes, location: this.url});
    if (error) {
        this.throw(error.message, 500);
    } else if (redirectLocation) {
        this.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
        this.body = html(name, ReactDOMServer.renderToString(serverRender(renderProps)));
    } else if (next) {
        yield next;
    } else {
        this.throw("Not Found", 404);
    }
}
