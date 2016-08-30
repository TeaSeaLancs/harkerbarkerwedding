const router = require('koa-router')({
    prefix: '/api'
});

require('./invites')(router);

module.exports = router;