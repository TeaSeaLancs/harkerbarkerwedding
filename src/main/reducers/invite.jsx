export const initialState = {
    loaded: false,
    id: null,
    invite: null,
    gif: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOADED_INVITE":
            return Object.assign({}, state, {
                invite: action.invite,
                loaded: true
            });
        case "ACCEPTED_INVITE":
            return Object.assign({}, state, {
                invite: {
                    ...state.invite,
                    state: 'accepted'
                }
            });
        case "DECLINED_INVITE":
            return Object.assign({}, state, {
                invite: {
                    ...state.invite,
                    state: 'declined'
                }
            });
        case "GOT_GIF":
            return Object.assign({}, state, {
                gif: action.gif
            });
        default:
            return state;
    }
}