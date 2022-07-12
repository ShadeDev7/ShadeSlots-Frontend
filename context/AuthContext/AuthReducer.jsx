import { SET_SHOW_MODAL, SET_MODAL, SET_USER } from "./types";

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

        case SET_USER:
            return {
                ...state,
                logged: true,
                showAuthModal: false,
                user: payload,
            };

        default:
            return state;
    }
};
