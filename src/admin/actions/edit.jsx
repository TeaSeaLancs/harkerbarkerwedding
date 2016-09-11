/* globals Headers */

import url from '../util/url';

function blankInvitee() {
    return {
        id: null,
        state: 'pending',
        contact: '',
        invitedTo: [],
        people: [],
        comments: ""
    }
}

export function createNewInvitee() {
    return {
        type: 'NEW_INVITEE',
        invitee: blankInvitee()
    }
}

export function openInvitee(invitee) {
    return {
        type: 'OPEN_INVITEE',
        invitee
    }
}

export function finishedEditing() {
    return {
        type: 'FINISHED_EDITING'
    }
}

function savingInvitee() {
    return {
        type: 'SAVING_INVITEE'
    }
}

function createInvitee(invitee) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return fetch(url('/api/invitee'), {
        method: 'POST',
        headers,
        body: JSON.stringify({invitee}),
        credentials: 'include'
    }).then(response => response.json());
}

function updateInvitee(invitee) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return fetch(url(`/api/invitee/${invitee.id}`), {
        method: 'POST',
        headers,
        body: JSON.stringify({invitee}),
        credentials: 'include'
    }).then(response => response.json());
}

function del(invitee) {
    return fetch(url(`/api/invitee/${invitee.id}`), {
        method: 'DELETE',
        credentials: 'include'
    });
}

function createdNewInvitee(invitee) {
    return {
        type: 'CREATED_NEW_INVITEE',
        invitee
    };
}

function updatedInvitee(invitee) {
    return {
        type: 'UPDATED_INVITEE',
        invitee
    }
}

function deletedInvitee(invitee) {
    return {
        type: 'DELETED_INVITEE',
        invitee
    }
}

function undidLastDeletion(invitee) {
    return {
        type: 'UNDID_DELETION',
        invitee
    }
}

export function saveInvitee(invitee) {
    return dispatch => {
        dispatch(savingInvitee());
        
        let save;
        
        if (!invitee.id) {
            console.log("Saving new invitee", invitee);
            save = createInvitee(invitee).then(invitee => {
                dispatch(createdNewInvitee(invitee));
            });
        } else {
            console.log("Saving existing invitee", invitee);
            save = updateInvitee(invitee).then(invitee => {
                dispatch(updatedInvitee(invitee));
            })
        }
        
        return save;
    }
}

export function deleteInvitee(invitee) {
    return dispatch => {
        return del(invitee).then(() => {
            dispatch(deletedInvitee(invitee));
        });
    }
}

export function undoLastDeletion() {
    return (dispatch, getState) => {
        const { edit: { lastDeleted }} = getState();
        if (!lastDeleted) {
            // TODO Flash error?
            console.error("No last one deleted");
        } else {
            delete lastDeleted._id;
            return createInvitee(lastDeleted).then(invitee => {
                dispatch(undidLastDeletion(invitee));
                dispatch(createdNewInvitee(invitee));
            });
        }
    }
}

export function definitelyNotUndoingDeletion() {
    return {
        type: 'DEFINITELY_NOT_UNDOING_DELETE'
    };
}