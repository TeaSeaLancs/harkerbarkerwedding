const React = require('react');
const { Provider } = require('react-redux');
const { RouterContext } = require('react-router');
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
const getMuiTheme = require('material-ui/styles/getMuiTheme').default;

module.exports = (store, renderProps, userAgent) => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme({userAgent})}>
            <RouterContext {...renderProps} />
        </MuiThemeProvider>
    </Provider>
);