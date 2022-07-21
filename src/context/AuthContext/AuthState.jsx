import { useReducer, useEffect } from "react";
import { useRouter } from "next/router";

import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

import initialState from "./initialState";

import { SET_SHOW_LOADING_MODAL, SET_SHOW_AUTH_MODAL, SET_MODAL, HANDLE_SESSION } from "./types";

const AuthState = props => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const router = useRouter();

    const setShowLoadingModal = (newValue, delay = 500) => {
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

    const handleSession = (session, redirect = false) => {
        if (redirect) router.push("/");

        localStorage.setItem("auth-token", JSON.stringify(session?.token ?? null));

        dispatch({
            type: HANDLE_SESSION,
            payload: session,
        });
    };

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("auth-token"));

        if (!token) return setShowLoadingModal(false);

        try {
            fetch("/api/auth/verifyToken", {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({ token }),
            })
                .then(request => request.json())
                .then(response => {
                    if (response.status === 200) handleSession(response.data);
                    else localStorage.removeItem("auth-token");
                });
        } catch (e) {
            localStorage.removeItem("auth-token");
        } finally {
            setShowLoadingModal(false);
        }
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
