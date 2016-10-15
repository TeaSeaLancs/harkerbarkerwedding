import url from '../util/url';

const loadedInvite = invite => ({
    type: "LOADED_INVITE",
    invite
});

const loadInvite = id => dispatch => {
    return fetch(url(`/api/invite/${id}`))
        .then(response => {
            if (!response.ok) {
                console.log("Oh dear", response);
            } else {
                return response.json();
            }
        })
        .then(invite => {
            dispatch(loadedInvite(invite));
            console.log(invite);
        });
}

export const loadInviteIfNeeded = () => (dispatch, getState) => {
    const { invite: { id, loaded } } = getState();
    
    if (!loaded) {
        console.log("Invite not loaded, loading...");
        return dispatch(loadInvite(id));
    }
}