const initialState = {
    list: [],
    loaded: false
};

function replaceMatches(i1, i2) {
    if (i1.id === i2.id) {
        return i2;
    }
    
    return i1;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOADED_INVITEES':
            return Object.assign({}, state, {
                list: action.invitees,
                loaded: true
            });
        case 'CREATED_NEW_INVITEE':
            return Object.assign({}, state, {
                list: [...state.list, action.invitee]
            });
        case 'UPDATED_INVITEE':
            return Object.assign({}, state, {
                list: state.list.map(i => replaceMatches(i, action.invitee))
            });
        case 'DELETED_INVITEE':
            return Object.assign({}, state, {
                list: state.list.filter(i => i.id !== action.invitee.id)
            });
        default:
            return state;
    }
}