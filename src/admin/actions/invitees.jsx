const testInvitees = () => {
    return {
        type: 'LOAD_INVITEES',
        invitees: ['one', 'two', 'three']
    };
}

export function loadInvitees() {
    return dispatch => new Promise(resolve => {
        setTimeout(() => {
            resolve(dispatch(testInvitees()));
        });
    });
}