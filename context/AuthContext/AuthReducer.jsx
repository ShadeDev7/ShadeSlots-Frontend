import { SET_SHOW_MODAL, SET_MODAL, HANDLE_AUTH_TOKEN } from "./types";

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

        case HANDLE_AUTH_TOKEN:
            const decodeToken = async () => {
                try {
                    const url = `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/verifyToken`;

                    const request = await fetch(url, {
                        headers: { "Content-Type": "application/json" },
                        method: "POST",
                        body: JSON.stringify({ token: payload }),
                    });

                    const response = await request.json();

                    if (response.status === 200) {
                        const { username, email } = response.data;

                        return {
                            username,
                            email,
                        };
                    }
                } catch (e) {}
            };

            const decodedToken = decodeToken();

            if (!decodedToken) return initialState;

            return {
                ...state,
                showAuthModal: false,
                logged: true,
                user: decodedToken,
            };

        default:
            return state;
    }
};
