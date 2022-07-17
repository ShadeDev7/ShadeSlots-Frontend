import { useReducer, useEffect } from "react";

import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

import initialState from "./initialState";

import { SET_SHOW_LOADING_MODAL, SET_SHOW_AUTH_MODAL, SET_MODAL, HANDLE_SESSION } from "./types";

const AuthState = props => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const setShowLoadingModal = (newValue, delay = 1000) => {
        setTimeout(() => {
            dispatch({
                type: SET_SHOW_LOADING_MODAL,
                payload: newValue,
            });
        }, delay);
    };

    const setShowAuthModal = newValue => {
        dispatch({
            type: SET_SHOW_AUTH_MODAL,
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

    const handleSession = (session, redirect = false) => {
        if (redirect) redirect("/");

        localStorage.setItem("auth-token", session?.token ?? null);

        dispatch({
            type: HANDLE_SESSION,
            payload: session,
        });
    };

    useEffect(() => {
        const localStorageToken = localStorage.getItem("auth-token");

        if (!localStorageToken) return setShowLoadingModal(false);

        verifyToken(localStorageToken).then(session => {
            if (session) handleSession(session);
            else localStorage.removeItem("auth-token");

            setShowLoadingModal(false);
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{ ...state, setShowLoadingModal, setShowAuthModal, setAuthModal, handleSession }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
