require('babel-register')({
    extensions: ['.jsx']
});

const http = require('http');
const path = require('path');

const app = require('koa')();
const ejs = require('koa-ejs');

const render = require('./render');

ejs(app, {
    root: path.join(__dirname, 'util'),
    layout: 'layout',
    viewExt: 'html',
    cache: false
});

app.use(render);

http.createServer(app.callback()).listen(8080);