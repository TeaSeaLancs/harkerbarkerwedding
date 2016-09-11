const fetch = require('isomorphic-fetch');

function bindFetchForRequest(req) {
    return (url, opts) => {
        opts = opts || {};
        opts.headers = Object.assign({}, opts.headers, req.header);
        return fetch(url, opts);
    };
}

function* fetchPassthrough(next) {
    global.fetch = bindFetchForRequest(this);
    yield next;
    global.fetch = fetch;
}

module.exports = fetchPassthrough;