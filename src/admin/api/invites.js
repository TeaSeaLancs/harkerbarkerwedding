const mongo = require('../../db/mongo').default;
const Security = require('../../util/security');

module.exports = router => {
    router.get('/invitees', function*() {
        try {
            Security.checkSession(this.session);
            const db = yield mongo;
            this.body = yield db.collection('invitees').find().toArray();
        } catch (err) {
            this.status = err.status || 500;
            this.body = err.message;
            this.app.emit('error', err, this);
        }
    });
    
    router.post('/invitee', function*() {
        
    });
}