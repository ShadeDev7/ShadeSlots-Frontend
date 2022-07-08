import { useReducer, useEffect } from "react";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import initialState from "./initialState";

<<<<<<< HEAD
import { SET_SHOW_MODAL, SET_MODAL, HANDLE_AUTH_TOKEN } from "./types";
=======
import { SET_SHOW_MODAL, SET_MODAL } from "./types";
>>>>>>> 4e95d4c6998c70e93600ee601832d8ccf80bef8b

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

<<<<<<< HEAD
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
=======
    // useEffect's

    return (
        <AuthContext.Provider value={{ ...state, setShowAuthModal, setAuthModal }}>
>>>>>>> 4e95d4c6998c70e93600ee601832d8ccf80bef8b
            {props.children}
        </AuthContext.Provider>
    );
};

export default ChatState;
