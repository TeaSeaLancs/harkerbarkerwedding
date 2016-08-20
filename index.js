require('babel-register')({
    extensions: ['.jsx']
});

const http = require('http');

const app = require('koa')();

const serve = require('koa-static');
const render = require('./src/render');
app.use(render);
app.use(serve('bin'));

http.createServer(app.callback()).listen(8080);