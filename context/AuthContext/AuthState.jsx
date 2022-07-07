import { useReducer, useEffect } from "react";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import initialState from "./initialState";

import { SET_SHOW_MODAL, SET_MODAL } from "./types";

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

    // useEffect's

    return (
        <AuthContext.Provider value={{ ...state, setShowAuthModal, setAuthModal }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default ChatState;
