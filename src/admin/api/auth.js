const mongo = require('../../db/mongo').default;
const security = require('../../util/security');

function auth(username, password) {
	return mongo
		.then(db => db.collection('users').findOne({username}))
		.then(user => {
			if (!user) {
				return false;
			}
		
			return security.authenticate(password, user.salt, user.password);
		});
}

module.exports = router => {
    router.post('/login', function*() {
		const { username, password } = this.request.fields;
		if (!username || !password) {
			throw new Error("No username or password provided");
		}
		
		try {
			const authed = yield auth(username, password);
			if (!authed) {
				this.status = 404;
				this.body = "Not found";
			} else {
				this.status = 200;
				this.body = "";
			}
		} catch (err) {
			console.error(err);
			this.body = err;
			this.status = 500;
		}
	});
}