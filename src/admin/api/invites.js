const uuid = require('uuid');

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
            this.body = {message: err.message};
            this.app.emit('error', err, this);
        }
    });
    
    router.post('/invitee', function*() {
        try {
            Security.checkSession(this.session);
            const invitee = this.request.fields.invitee;
            if (!invitee) {
                throw new Error("No invitee provided");
            }
            invitee.id = uuid.v4();
            const db = yield mongo;
            yield db.collection('invitees').insertOne(invitee);
            this.body = invitee;
        } catch (err) {
            this.status = err.status || 500;
            this.body = {message: err.message};
            this.app.emit('error', err, this);
        }
    });
    
    router.post('/invitee/:id', function*() {
        try {
            Security.checkSession(this.session);
            const id = this.params.id;
            const invitee = this.request.fields.invitee;
            
            if (!invitee) {
                throw new Error("No invitee provided");
            }
            
            if (invitee.id !== id) {
                throw new Error(`Tried to overwrite ${id} with ${invitee.id}`);
            }
            
            const newID = invitee.newID;
            
            if (newID) {
                invitee.id = newID;
                delete invitee.newID;
            }
            
            const db = yield mongo;
            delete invitee._id;
            yield db.collection('invitees').updateOne({id}, invitee);
            const result = Object.assign({}, invitee);
            if (newID) {
                result.oldID = id;
            }
            this.body = result;
        } catch (err) {
            this.status = err.status || 500;
            this.body = {message: err.message};
            this.app.emit('error', err, this);
        }
    });
    
    router.del('/invitee/:id', function*() {
       try {
           Security.checkSession(this.session);
           const id = this.params.id;
           
           const db = yield mongo;
           console.log("Deleting", id);
           yield db.collection('invitees').deleteOne({id});
           this.body = {message: 'ok'};
       } catch (err) {
           this.status = err.status || 500;
           this.body = {message: err.message};
           this.app.emit('error', err, this);
       }
    });
};