import { useReducer, useEffect } from "react";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import initialState from "./initialState";

import { SET_SHOW_MODAL, SET_MODAL, HANDLE_AUTH_TOKEN } from "./types";

const ChatState = props => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Functions
    const setShowAuthModal = newValue => {
        dispatch({
            type: SET_SHOW_MODAL,
            payload: newValue,
        });
    };

    const setAuthModal = newValue => {
        dispatch({
            type: SET_MODAL,
            payload: newValue,
        });
    };

    const handleAuthToken = token => {
        localStorage.setItem("auth-jwt", token);

        dispatch({
            type: HANDLE_AUTH_TOKEN,
            payload: token,
        });
    };

    // useEffect's
    return (
        <AuthContext.Provider value={{ ...state, setShowAuthModal, setAuthModal, handleAuthToken }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default ChatState;
