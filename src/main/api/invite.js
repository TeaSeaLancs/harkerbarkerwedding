const mongo = require('../../db/mongo').default;

const mapPlacesToDates = places => {
    const hasSouth = places.includes('south');
    const hasCeremony = places.includes('ceremony');
    
    if (!hasCeremony) {
        return "8th of April, 2016";
    } else {
        return "7th & 8th of April, 2016"
    }
}

module.exports = router => {
    router.get("/invite/:id", function*() {
        try {
            const db = yield mongo;
            const invite = yield db.collection('invitees').findOne({id: this.params.id});
            
            if (!invite) {
                // TODO Handle invite not existing
            } else {
                // Ok to so to prevent any untoward information leaking out here we convert the invite into
                // ready made text.
                this.body = {
                    state: invite.state,
                    people: invite.people,
                    comments: invite.comments,
                    dates: mapPlacesToDates(invite.invitedTo)
                }
            }
        } catch (err) {
            this.status = err.status || 500;
            this.body = {message: err.message};
            this.app.emit('error', err, this);
        }
    });
}