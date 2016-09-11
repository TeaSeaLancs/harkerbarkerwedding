const initialState = {
    currentInvitee: null,
    lastDeleted: null,
    showingUndo: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_INVITEE':
            return Object.assign({}, state, {
                currentInvitee: action.invitee
            });
        case 'OPEN_INVITEE':
            return Object.assign({}, state, {
                currentInvitee: action.invitee
            });
        case 'FINISHED_EDITING':
            return Object.assign({}, state, {
                currentInvitee: null
            });
        case 'DELETED_INVITEE':
            return Object.assign({}, state, {
                lastDeleted: action.invitee,
                showingUndo: true
            });
        case 'UNDID_DELETION':
        case 'DEFINITELY_NOT_UNDOING_DELETE':
            return Object.assign({}, state, {
                lastDeleted: null,
                showingUndo: false
            })
        default:
            return state;
    }
}