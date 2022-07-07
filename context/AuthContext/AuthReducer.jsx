import { SET_SHOW_MODAL, SET_MODAL } from "./types";

import initialState from "./initialState";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_SHOW_MODAL:
            return {
                ...state,
                showAuthModal: payload,
            };

        case SET_MODAL:
            return {
                ...state,
                modal: payload,
            };

        default:
            return state;
    }
};
