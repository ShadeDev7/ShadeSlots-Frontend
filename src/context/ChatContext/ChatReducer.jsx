import { SET_SHOW_CHAT } from "./types";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_SHOW_CHAT:
            return {
                ...state,
                showChat: payload,
            };

        default:
            return state;
    }
};
