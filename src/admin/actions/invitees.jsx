import url from '../util/url';

const loadingInvitees = () => {
    return {
        type: 'LOADING_INVITEES'
    };
}

const loadedInvitees = invitees => {
    return {
        type: 'LOADED_INVITEES',
        invitees
    };
}

function doLoad(dispatch) {
    dispatch(loadingInvitees());
        
    console.log("Loading invitees...");
    return fetch(url('api/invitees'))
        .then(response => response.json())
        .then(invitees => {
            console.log("Loaded invitees");
            return dispatch(loadedInvitees(invitees));
        })
        .catch(err => console.error(err));
}

export function loadInvitees() {
    return (dispatch) => doLoad(dispatch);
}

export function loadInviteesIfRequired() {
    return (dispatch, getState) => {
        const { invitees } = getState();
        if (!invitees.loaded) {
            console.log("Invitees haven't been loaded, loading...");
            return doLoad(dispatch);
        }
    }
}