const router = require('koa-router')({
    prefix: '/api'
});

require('./invites')(router);
require('./auth')(router);

module.exports = router;