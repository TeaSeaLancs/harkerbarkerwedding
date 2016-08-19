const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');

const serverRender = require('./util/serverRender');
const routes = require('./util/routes');

function* render() {
    let reactString;
    ReactRouter.match({routes: routes.routes, location: this.url}, 
          (error, redirectLocation, renderProps) => {
            if (error) {
                this.throw(error.message, 500);
            } else if (redirectLocation) {
                this.redirect(redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {
                reactString = ReactDOMServer.renderToString(serverRender(renderProps));
            }
        });
    
    yield this.render('layout', {react: reactString});
}

module.exports = render;
