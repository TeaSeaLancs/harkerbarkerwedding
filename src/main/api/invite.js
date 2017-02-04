const mongo = require('../../db/mongo').default;

const LOCATIONS = {
    ceremony: `The Ceremony @ St Mary's church, Bedford, April 7th 2017`,
    south: `The Wedding Party @ Trestle Arts Base, St Albans, April 8th 2017`,
    north: `The Wedding Party @ Skitby House, near Carlisle, April 15th 2017`
};

const mapPlacesToLocations = places => {
    return places.map(place => LOCATIONS[place]);
};

module.exports = router => {
    router.get("/invite/:id", function*() {
        try {
            const db = yield mongo;
            const invite = yield db.collection('invitees').findOne({id: this.params.id});
            
            if (!invite) {
                throw new Error("No such invite exists");
            } else {
                // Ok to so to prevent any untoward information leaking out here we convert the invite into
                // ready made text.
                this.body = {
                    state: invite.state,
                    people: invite.people,
                    comments: invite.comments,
                    locations: mapPlacesToLocations(invite.invitedTo)
                };
            }
        } catch (err) {
            this.status = err.status || 500;
            this.body = {message: err.message};
            this.app.emit('error', err, this);
        }
    });
    
    router.post("/invite/:id/accept", function*() {
        try {
            const id = this.params.id;
            const db = yield mongo;
            const invite = yield db.collection('invitees').findOne({id});
            
            if (!invite) {
                throw new Error("No such invite exists");
            } else {
                const update = {'$set': { state: 'accepted' } };
                yield db.collection('invitees').updateOne({id}, update);
                
                this.body = {
                    success: true
                };
            }
        } catch (err) {
            this.status = err.status || 500;
            this.body = {message: err.message};
            this.app.emit('error', err, this);
        }
    });
    
    router.post("/invite/:id/decline", function*() {
        try {
            const id = this.params.id;
            const db = yield mongo;
            const invite = yield db.collection('invitees').findOne({id});
            
            if (!invite) {
                throw new Error("No such invite exists");
            } else {
                const update = {'$set': { state: 'declined' } };
                yield db.collection('invitees').updateOne({id}, update);
                
                this.body = {
                    success: true
                };
            }
        } catch (err) {
            this.status = err.status || 500;
            this.body = {message: err.message};
            this.app.emit('error', err, this);
        }
    });
};