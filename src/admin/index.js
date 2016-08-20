const subdomain = require('koa-sub-domain');

const Render = require('../render');
const routes = require('./routes').default;
const reducers = require('./reducers/app').default;

const render = Render('admin', routes, reducers);
module.exports = subdomain('admin', render);