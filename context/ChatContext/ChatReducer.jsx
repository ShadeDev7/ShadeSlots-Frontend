import {
    SET_CONNECTED,
    UPDATE_ONLINE_USERS,
    UPDATE_MESSAGES,
    SET_SHOW_LOGIN_MESSAGE,
} from "./types";

import initialState from "./initialState";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_CONNECTED:
            return {
                ...state,
                connected: payload,
            };

        case UPDATE_ONLINE_USERS:
            return {
                ...state,
                onlineUsers: payload.onlineUsers,
            };

        case UPDATE_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, payload],
            };

        case SET_SHOW_LOGIN_MESSAGE:
            return {
                ...state,
                showLoginMessage: payload,
            };

        default:
            return state;
    }
};
