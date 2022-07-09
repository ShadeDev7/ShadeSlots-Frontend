import { useReducer, useEffect } from "react";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import initialState from "./initialState";

import { SET_SHOW_MODAL, SET_MODAL, SET_USER } from "./types";

import { decodeToken } from "../../utils";

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

    const handleAuthToken = async token => {
        const decodedToken = await decodeToken(token);

        if (!decodedToken) {
            return console.log("invalid jwt");
        }

        localStorage.setItem("auth-jwt", token);

        dispatch({
            type: SET_USER,
            payload: decodedToken,
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
