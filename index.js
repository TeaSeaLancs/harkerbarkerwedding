require('babel-register')({
    extensions: ['.jsx']
});

const http = require('http');

const app = require('koa')();
const serve = require('koa-static');

const admin = require('./src/admin/');
//app.use(serve('bin'));
app.use(admin);

http.createServer(app.callback()).listen(8080);