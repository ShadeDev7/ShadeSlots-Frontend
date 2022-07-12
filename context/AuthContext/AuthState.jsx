import { useReducer, useEffect } from "react";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import initialState from "./initialState";

import { SET_SHOW_MODAL, SET_MODAL, SET_USER } from "./types";

import { decodeAuthToken } from "../../utils";

const ChatState = props => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

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
        const decodedToken = await decodeAuthToken(token);
        if (!decodedToken) return localStorage.removeItem("auth-token");

        localStorage.setItem("auth-token", token);

        dispatch({
            type: SET_USER,
            payload: decodedToken,
        });
    };

    useEffect(() => {
        const localStorageToken = localStorage.getItem("auth-token");
        if (!localStorageToken) return;

        handleAuthToken(localStorageToken);
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, setShowAuthModal, setAuthModal, handleAuthToken }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default ChatState;
