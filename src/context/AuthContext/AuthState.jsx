import { useReducer, useEffect } from "react";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import initialState from "./initialState";

import { SET_SHOW_MODAL, SET_MODAL, HANDLE_SESSION } from "./types";

const AuthState = props => {
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

    const verifyToken = async token => {
        const request = await fetch("/api/auth/verifyToken", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ token }),
        });
        const response = await request.json();

        if (response.status !== 200) return;

        return response.data;
    };

    const handleSession = session => {
        localStorage.setItem("auth-token", session?.token);

        dispatch({
            type: HANDLE_SESSION,
            payload: session,
        });
    };

    useEffect(() => {
        const localStorageToken = localStorage.getItem("auth-token");

        if (!localStorageToken) return;

        verifyToken(localStorageToken).then(session => {
            if (!session) return localStorage.removeItem("auth-token");

            handleSession(session);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, setShowAuthModal, setAuthModal, handleSession }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
