const router = require('koa-router')({
    prefix: '/api'
});

require('./invite')(router);
module.exports = router;