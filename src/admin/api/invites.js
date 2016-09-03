const mongo = require('../../db/mongo').default;

module.exports = router => {
    router.get('/invitees', function*() {
        const db = yield mongo;
        this.body = yield db.collection('invitees').find().toArray();
    });
    
    router.post('/invitee', function*() {
        
    });
}