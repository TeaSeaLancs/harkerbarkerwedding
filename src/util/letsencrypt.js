let server = 'https://acme-v01.api.letsencrypt.org/directory';
if (process.env.NODE_ENV !== 'production') {
    console.log("Switching to staging server for letsencrypt");
    server = 'staging';
}

const configDir = require('os').homedir() + '/letsencrypt/etc';

const approvedDomain = process.env.APPROVED_DOMAIN;
console.log("Approved domain for letsencrypt is: ", approvedDomain);

const approveDomains = (options, certs, cb) => {
    options.domains = certs && certs.altnames || options.domains;
    const valid = options.domains.every(domain => domain.indexOf(approvedDomain) != -1);
    if (!valid) {
        console.error("Passed domains ", options.domains, " didn't include ", approvedDomain);
    } else {
        options.email = 'thundercloud@theflux.co.uk'
        options.agreeTos = true;

        cb(null, {options, certs});
    }
}

module.exports = require('letsencrypt-express').create({
    server,
    configDir,
    approveDomains
});