const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');

const serverRender = require('./util/serverRender');
const routes = require('./util/routes').routes;
const html = require('./util/html');

const match = data => new Promise(resolve => {
   return ReactRouter.match(data, (error, redirectLocation, renderProps) => resolve([error, redirectLocation, renderProps]));
});

function* render(next) {
    const [error, redirectLocation, renderProps] = yield match({routes, location: this.url});
    
    if (error) {
        this.throw(error.message, 500);
    } else if (redirectLocation) {
        this.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
        this.body = html(ReactDOMServer.renderToString(serverRender(renderProps)));
    } else {
        yield next;
    }
}

module.exports = render;
