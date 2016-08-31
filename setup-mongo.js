require('babel-register')({
    extensions: ['.jsx']
});

const mongo = require('./src/db/mongo').default;

mongo.then(db => {
	db.collection('users').createIndex({username: 1}, {unique: true});
	console.log("Set up mongoDB");
	return db.close();
}).catch(err => console.error(err));