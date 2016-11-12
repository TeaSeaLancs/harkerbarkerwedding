import url from '../util/url';

const GIF_STATE_KEYWORD_MAP = {
    accepted: 'yay',
    declined: 'sad'
};

const loadedInvite = invite => ({
    type: "LOADED_INVITE",
    invite
});

const acceptedInvite = () => ({
    type: "ACCEPTED_INVITE"
});

const declinedInvite = () => ({
    type: "DECLINED_INVITE"
});

const gotGif = gif => ({
    type: "GOT_GIF",
    gif
});

const inviteDoesNotExist = () => ({
    type: "NO_INVITE"
});

const loadInvite = id => dispatch => {
    return fetch(url(`/api/invite/${id}`))
        .then(response => {
            if (!response.ok) {
                throw new Error("No invite matching that ID");
            } else {
                return response.json();
            }
        })
        .then(invite => dispatch(loadedInvite(invite)))
        .catch(err => {
            console.error(err);
            dispatch(inviteDoesNotExist());
        });
}

export const loadInviteIfNeeded = () => (dispatch, getState) => {
    const { invite: { id, loaded } } = getState();
    
    if (!loaded) {
        console.log("Invite not loaded, loading...");
        return dispatch(loadInvite(id));
    }
}

const loadGif = () => (dispatch, getState) => {
    const { invite: { invite: { state } } } = getState();
    
    if (state in GIF_STATE_KEYWORD_MAP) {
        const keyword = GIF_STATE_KEYWORD_MAP[state];
        return fetch(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${keyword}&rating=y`)
            .then(response => response.json())
            .then(giphyResponse => {
                const { data: { image_url } } = giphyResponse;
                dispatch(gotGif(image_url));
            });
    }
}

export const loadGifIfNeeded = () => (dispatch, getState) => {
    const { invite: { invite, gif } } = getState();
    
    const state = invite ? invite.state : null;
    
    if (state && state in GIF_STATE_KEYWORD_MAP && !gif) {
        return dispatch(loadGif());
    }
};

export const acceptInvite = () => (dispatch, getState) => {
    const { invite: { id } } = getState();
    
    const options = {
        method: 'POST'
    };
    
    return fetch(url(`/api/invite/${id}/accept`), options)
        .then(response => {
            if (!response.ok) {
                console.log("Couldn't accept invite", response);
            } else {
                return response.json();
            }
        }).then(invite => {
            dispatch(acceptedInvite());
            dispatch(loadGif());
        });
}

export const declineInvite = () => (dispatch, getState) => {
    const { invite: { id } } = getState();
    
    const options = {
        method: 'POST'
    };
    
    return fetch(url(`/api/invite/${id}/decline`), options)
        .then(response => {
            if (!response.ok) {
                console.log("Couldn't decline invite", response);
            } else {
                return response.json();
            }
        }).then(invite => {
            dispatch(declinedInvite());
            dispatch(loadGif());
        });
}