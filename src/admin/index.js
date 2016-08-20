const subdomain = require('koa-sub-domain');

const Render = require('../render');
const routes = require('./routes').default;

const render = Render('admin', routes);
module.exports = subdomain('admin', render);