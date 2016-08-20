const initialState = {
    list: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_INVITEES':
            return Object.assign({}, state, {
                list: action.invitees
            })
        default:
            return state;
    }
}