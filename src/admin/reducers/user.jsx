const initialState = {
    session: null,
    loggingIn: false,
    loginError: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGGING_IN':
            return Object.assign({}, state, {
                loggingIn: true,
                loginError: null
            });
        case 'AUTH_FAILURE':
            return Object.assign({}, state, {
                loggingIn: false,
                loginError: `Your username or password wasn't right!`
            });
        case 'LOGGED_IN':
            return Object.assign({}, state, {
                loggingIn: false,
                loginError: null,
                session: action.session
            });
        default:
            return state;
    }
}