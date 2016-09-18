require('babel-register')({
    extensions: ['.jsx']
});
require('isomorphic-fetch');
require('./src/util/css');

const http = require('http');
//const https = require('https');
const app = require('koa')();
const serve = require('koa-static');
const bodyparser = require('koa-better-body');

//const le = require('./src/util/letsencrypt');

app.keys = ['koa-tutorial'];
app.use(bodyparser());
app.use(serve('bin'));
app.use(require('./src/admin/'));

require('./src/util/requirements').then(() => {
    
    http.createServer(app.callback()).listen(9000, () => {
       console.log("Server up"); 
    });
    
}).catch(err => console.error(err));