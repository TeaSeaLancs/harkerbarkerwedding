const { MongoClient } = require('mongodb');

const mongoURL = process.env['MONGODB_URL'];

if (!mongoURL) {
    console.error("MONGODB_URL must be set");
    process.exit(1);
}

export default MongoClient.connect(mongoURL);