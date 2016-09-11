const { MongoClient } = require('mongodb');
const MongoStore = require('koa-generic-session-mongo');

const mongoURL = process.env['MONGODB_URL'];

if (!mongoURL) {
    console.error("MONGODB_URL must be set");
    process.exit(1);
}

export default MongoClient.connect(mongoURL);
export function koa() {
    return new MongoStore({
        url: mongoURL
    });
}