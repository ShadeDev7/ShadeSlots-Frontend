import { SET_SHOW_MODAL, SET_MODAL, HANDLE_SESSION } from "./types";

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

        case HANDLE_SESSION:
            if (!payload) return initialState;

            return {
                ...state,
                logged: true,
                showAuthModal: false,
                token: payload.token,
                user: payload.user,
            };

        default:
            return state;
    }
};
