const router = require('koa-router')({
    prefix: '/api'
});

require('./invite')(router);
require('./gif')(router);
module.exports = router;