const loadingInvitees = () => {
    return {
        type: 'LOADING_INVITEES'
    };
}

export function loadInvitees() {
    return (dispatch) => {
        dispatch(loadingInvitees());
        
        console.log("Loading invitees...");
        return get('/api/invitees')
            .then(invitees => {
                console.log("Got invitees", invitees);
            })
            .catch(err => console.error(err));
    }
}

export function loadInviteesIfRequired() {
    return (dispatch, getState) => {
        const { invitees } = getState();
        if (!invitees.list || !invitees.list.length) {
            console.log("Invitees haven't been loaded, loading...");
            dispatch(loadInvitees());
        }
    }
}