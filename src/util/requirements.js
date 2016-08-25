const mongo = require('../db/mongo').default;
module.exports = Promise.all([mongo]);