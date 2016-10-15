export const initialState = {
    loaded: false,
    id: null,
    invite: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOADED_INVITE":
            return Object.assign({}, state, {
                invite: action.invite,
                loaded: true
            });
        default:
            return state;
    }
}