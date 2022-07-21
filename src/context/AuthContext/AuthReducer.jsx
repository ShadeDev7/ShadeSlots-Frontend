import { SET_SHOW_LOADING_MODAL, SET_SHOW_AUTH_MODAL, SET_MODAL, HANDLE_SESSION } from "./types";

import initialState from "./initialState";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_SHOW_LOADING_MODAL:
            return {
                ...state,
                showLoadingModal: payload,
            };

        case SET_SHOW_AUTH_MODAL:
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
            if (!payload) return { ...initialState, showLoadingModal: false };

            return {
                ...state,
                showAuthModal: false,
                logged: true,
                ...payload,
            };

        default:
            return state;
    }
};
