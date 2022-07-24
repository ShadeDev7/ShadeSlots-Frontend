import { useReducer } from "react";

import ChatReducer from "./ChatReducer";
import ChatContext from "./ChatContext";

import initialState from "./initialState";

import { SET_SHOW_CHAT } from "./types";

const ChatState = props => {
    const [state, dispatch] = useReducer(ChatReducer, initialState);

    const setShowChat = newValue => {
        dispatch({
            type: SET_SHOW_CHAT,
            payload: newValue,
        });
    };

    return (
        <ChatContext.Provider value={{ ...state, setShowChat }}>
            {props.children}
        </ChatContext.Provider>
    );
};

export default ChatState;
