const router = require('koa-router')({
    prefix: '/api'
});

router.get('/invitees', function*() {
    console.log("Request for invitees");
});

module.exports = router;