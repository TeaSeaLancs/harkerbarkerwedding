const React = require('react');
const { RouterContext } = require('react-router');

module.exports = (renderProps) => (<RouterContext {...renderProps} />);