const React = require('react');
const { Provider } = require('react-redux');
const { RouterContext } = require('react-router');
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
const getMuiTheme = require('material-ui/styles/getMuiTheme').default;
const theme = require('./theme').default;

const injectTapEventPlugin = require('react-tap-event-plugin');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

module.exports = (store, renderProps, userAgent) => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme({userAgent}, theme)}>
            <RouterContext {...renderProps} />
        </MuiThemeProvider>
    </Provider>
);