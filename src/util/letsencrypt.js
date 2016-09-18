let server = 'https://acme-v01.api.letsencrypt.org/directory';
if (process.env.NODE_ENV !== 'production') {
    console.log("Switching to staging server for letsencrypt");
    server = 'staging';
}

const configDir = require('os').homedir() + '/letsencrypt/etc';

const approveDomains = (options, certs, cb) => {
    options.domains = certs && certs.altnames || options.domains;
    options.email = 'thundercloud@theflux.co.uk'
    options.agreeTos = true;
    
    cb(null, {options, certs});
}

module.exports = require('letsencrypt-express').create({
    server,
    configDir,
    approveDomains
});