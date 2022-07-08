import { useReducer, useEffect } from "react";
import io from "socket.io-client";

import ChatContext from "./ChatContext";
import ChatReducer from "./ChatReducer";

import initialState from "./initialState";

import { SET_CONNECTED, UPDATE_ONLINE_USERS, UPDATE_MESSAGES } from "./types";

import { scrollChatToBottom } from "../../utils";

const socket = io(process.env.NEXT_PUBLIC_CHAT_WEBSOCKET_URI);

const ChatState = props => {
    const [state, dispatch] = useReducer(ChatReducer, initialState);

    // Functions
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

    const updateMessages = message => {
        dispatch({
            type: UPDATE_MESSAGES,
            payload: message,
        });
    };

    const sendMessage = message => {
        socket.emit("message", { message });
    };

    // useEffect's
    useEffect(() => {
        if (socket) {
            setConnected();

            socket.emit("connected");
        }
    }, []);

    useEffect(() => {
        socket.on("connected_users", data => {
            updateOnlineUsers(data);
        });

        socket.on("received_message", ({ message }) => {
            updateMessages(message);
        });

        return () => socket.off();
    }, [state.onlineUsers, state.messages]);

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
