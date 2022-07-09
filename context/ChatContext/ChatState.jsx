import { useReducer, useContext, useEffect } from "react";
import io from "socket.io-client";

import ChatContext from "./ChatContext";
import ChatReducer from "./ChatReducer";
import AuthContext from "../AuthContext/AuthContext";

import initialState from "./initialState";

import {
    SET_CONNECTED,
    UPDATE_ONLINE_USERS,
    UPDATE_MESSAGES,
    SET_SHOW_LOGIN_MESSAGE,
} from "./types";

import { scrollChatToBottom } from "../../utils";

const socket = io(process.env.NEXT_PUBLIC_CHAT_WEBSOCKET_URI);

const ChatState = props => {
    const [state, dispatch] = useReducer(ChatReducer, initialState);

    const { logged, user } = useContext(AuthContext);

    const setConnected = () => {
        dispatch({
            type: SET_CONNECTED,
            payload: true,
        });
    };

    const updateOnlineUsers = data => {
        dispatch({
            type: UPDATE_ONLINE_USERS,
            payload: data,
        });
    };

    const updateMessages = data => {
        dispatch({
            type: UPDATE_MESSAGES,
            payload: data,
        });
    };

    const setShowLoginMessage = newValue => {
        dispatch({
            type: SET_SHOW_LOGIN_MESSAGE,
            payload: newValue,
        });
    };

    const sendMessage = message => {
        if (!state.logged) return setShowLoginMessage(true);

        socket.emit("message", { user, message });
    };

    useEffect(() => {
        if (!socket) return;

        setConnected();

        socket.emit("connected");
    }, []);

    useEffect(() => {
        if (!socket || !logged || !user) return;

        socket.emit("logged", user);

        if (!state.showLoginMessage) return;

        setShowLoginMessage(false);
    }, [logged]);

    useEffect(() => {
        if (!socket) return;

        socket.on("online_users", data => {
            updateOnlineUsers(data);
        });

        socket.on("received_message", data => {
            updateMessages(data);
        });

        return () => socket.off();
    }, [state.connected, state.onlineUsers, state.messages]);

    useEffect(() => {
        scrollChatToBottom();
    }, [state.messages]);

    return (
        <ChatContext.Provider value={{ ...state, sendMessage }}>
            {props.children}
        </ChatContext.Provider>
    );
};

export default ChatState;
