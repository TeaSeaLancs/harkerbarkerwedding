const mongo = require('../../db/mongo').default;

const router = require('koa-router')({
    prefix: '/api'
});

router.get('/invitees', function*() {
    const db = yield mongo;
    this.body = yield db.collection('invitees').find().toArray();
});

module.exports = router;