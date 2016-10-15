const path = require('path');

const compose = require('koa-compose');

const Render = require('../render');
const routes = require('./routes').default;
const reducers = require('./reducers').default;

const api = require('./api/');

const serve = require('koa-static-server');

const getInviteID = req => {
    const url = req.request.url;
    const id = url.split("/").slice(-1)[0];
    return {
        invite: {
            loaded: false,
            invite: null,
            id
        }
    }
}

const imageServer = serve({rootDir: path.join(__dirname, 'images'), rootPath: '/images'});

module.exports = compose([imageServer, api.routes(), Render('main', routes, getInviteID, reducers)]);