const subdomain = require('koa-sub-domain');
const compose = require('koa-compose');
const Session = require('koa-generic-session');

// TODO God this is awful
require('./css/base');

const Render = require('../render');
const routes = require('./routes').default;
const reducers = require('./reducers/app').default;
const api = require('./api/');
const mongo = require('../db/mongo').koa;
const Security = require('../util/security');

const koaFetch = require('../util/koa-fetch');

const session = Session({
    store: mongo(),
    cookie: {
        maxAge: 10 * 1000 * 60,
        domain: process.env.ADMIN_DOMAIN,
        overwrite: true
    }
});

function* check(next) {
    Security.userCheck(this.session);
    yield next;
}

const render = Render('admin', routes, reducers);
module.exports = subdomain('admin', compose([session, check, koaFetch, api.routes(), render]));