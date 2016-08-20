const React = require('react');
const { Provider } = require('react-redux');
const { RouterContext } = require('react-router');

module.exports = (store, renderProps) => (
    <Provider store={store}>
        <RouterContext {...renderProps} />
    </Provider>
);