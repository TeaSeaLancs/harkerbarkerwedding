const crypto = require("crypto");

function generateSalt() {
	return new Promise((resolve, reject) => {
		crypto.randomBytes(32, (err, buf) => {
			if (err) {
				reject(err);
			}
			resolve(buf.toString("hex"));
		});
	});
}

function hash(password, salt) {
	return new Promise((resolve, reject) => {
		crypto.pbkdf2(password, salt, 10000, 512, 'sha512', (err, key) => {
			if (err) {
				reject(err);
			}
			resolve(key.toString("hex"));
		});
	});
}

function authenticate(password, salt, encrypted) {
	return hash(password, salt).then(hash => hash === encrypted);
}

function encrypt(password) {
	return generateSalt().then(salt => {
		return hash(password, salt).then(encrypted => ({encrypted, salt}));
	});
}

module.exports = {
	authenticate,
	encrypt
}