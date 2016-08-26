require('babel-register')({
    extensions: ['.jsx']
});

require('isomorphic-fetch');

const http = require('http');
const app = require('koa')();
const serve = require('koa-static');

const admin = require('./src/admin/');
app.use(serve('bin'));
app.use(admin);

require('./src/util/requirements').then(() => {
    http.createServer(app.callback()).listen(9000);
    console.log("Server up");
}).catch(err => console.error(err));