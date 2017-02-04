import url from '../util/url';

const loggingIn = () => {
	return {
		type: 'LOGGING_IN'
	};
};

const authFailure = () => {
    return {
        type: 'AUTH_FAILURE'
    };
};

const loggedIn = session => {
    return {
        type: 'LOGGED_IN',
        session
    };
};

export function login(data) {
	return dispatch => {
		dispatch(loggingIn());
        
        const options = {
			method: 'POST',
			body: data,
            credentials: 'include'
		};
		
		return fetch(url('/api/login'), options)
            .then(response => {
                if (response.status === 404) {
                    dispatch(authFailure());
                    throw new Error("Login failed");
                } else {
                    return response.json();
                }
            }).then(data => {
                dispatch(loggedIn(data));
            })
            .catch(err => console.error("No", err));
	};
}