const initialState = {
    list: [],
    loaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOADED_INVITEES':
            return Object.assign({}, state, {
                list: action.invitees,
                loaded: true
            })
        default:
            return state;
    }
}