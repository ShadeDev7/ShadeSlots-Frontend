import { SET_SHOW_SIDEBAR, SET_SIDEBAR_TAB } from "./types";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_SHOW_SIDEBAR:
            return {
                ...state,
                showSidebar: payload,
            };

        case SET_SIDEBAR_TAB:
            return {
                ...state,
                sidebarTab: payload,
            };

        default:
            return state;
    }
};
