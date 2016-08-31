const subdomain = require('koa-sub-domain');
const compose = require('koa-compose');

// TODO God this is awful
require('./css/base');

const Render = require('../render');
const routes = require('./routes').default;
const reducers = require('./reducers/app').default;
const api = require('./api/');

const render = Render('admin', routes, reducers);
module.exports = subdomain('admin', compose([api.routes(), render]));