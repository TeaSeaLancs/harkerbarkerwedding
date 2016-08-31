require('babel-register')({
    extensions: ['.jsx']
});

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
	{name: 'username', alias: 'u'},
	{name: 'password', alias: 'p'},
	{name: 'email', alias: 'e'},
	{name: 'override', alias: 'o', type: Boolean}
];

const config = commandLineArgs(optionDefinitions);
const {username, password, email} = config;

if (!username || !password || !email) {
	console.log("Must provide username, password & email!");
	process.exit(0);
}

const security = require('./src/util/security');
const mongo = require('./src/db/mongo').default;

function add(db, user) {
	console.log(`Adding ${username}`);
	return db.collection('users').insertOne(user).catch(err => {
		if (err.code === 11000) {
			console.error(`The username ${username} already exists. You can update it by specifying -o`);
		}
	});
}

function update(db, user) {
	console.log(`Updating ${username}`);
	return db.collection('users').replaceOne({username}, user);
}

security.encrypt(password).then(({encrypted, salt}) => {
	return mongo.then(db => {
		const user = {
			username,
			email,
			password: encrypted,
			salt
		};
		
		let action;
		
		if (!config.override) {
			action = add(db, user);
		} else {
			action = update(db, user);
		}
		
		return action.then(() => {
			db.close();
		}).catch(err => {
			db.close();
			throw err;
		});
	});
}).catch(err => console.error(err));