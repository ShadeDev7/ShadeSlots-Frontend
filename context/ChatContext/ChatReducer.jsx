import { SET_CONNECTED, UPDATE_ONLINE_USERS, UPDATE_MESSAGES } from "./types";

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
            const newUserMessage = payload.newUser && {
                sender: {
                    name: payload.newUser,
                    profilePicture: "/imgs/placeholder_user.png",
                    profileUrl: "#",
                },
                content: "just joined!",
                type: "join",
            };

            return {
                ...state,
                onlineUsers: payload.onlineUsers,
                ...(payload.newUser && { messages: [...state.messages, newUserMessage] }),
            };

        case UPDATE_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, payload],
            };

        default:
            return state;
    }
};
