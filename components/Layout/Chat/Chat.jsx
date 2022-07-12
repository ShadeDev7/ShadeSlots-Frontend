import { useContext, useEffect, useState } from "react";

import ChatContext from "../../../context/ChatContext/ChatContext";

import LoginMessage from "./LoginMessage";
import Message from "./Message";

import { trimAll } from "../../../utils";

const Chat = () => {
    const { showLoginMessage, onlineUsers, messages, sendMessage } = useContext(ChatContext);

    const [message, setMessage] = useState("");
    const [animateLoginMessage, setAnimateLoginMessage] = useState(null);

    const handleMessage = e => {
        e.preventDefault();

        const msg = trimAll(message);
        if (!msg) return setMessage("");

        sendMessage(message);
        setMessage("");
    };

    useEffect(() => {
        if (showLoginMessage == null) return;

        if (showLoginMessage) {
            setAnimateLoginMessage(showLoginMessage);

            setTimeout(() => {
                document.getElementById("loginMessageWrapper").classList.toggle("opacity-0");
            }, 150);
        } else {
            document.getElementById("loginMessageWrapper").classList.toggle("opacity-0");

            setTimeout(() => {
                setAnimateLoginMessage(showLoginMessage);
            }, 250);
        }
    }, [showLoginMessage]);

    return (
        <div
            className="
                lg:w-1/4
                xl:w-1/5
                hidden
                lg:flex
                flex-col
                items-center
                justify-center
                relative
            "
        >
            <div
                id="loginMessageWrapper"
                className="
                    w-full
                    absolute
                    z-[1]
                    flex
                    flex-col
                    items-center
                    gap-4
                    font-bold
                    opacity-0
                    transition-opacity 
                    duration-500
                "
            >
                {animateLoginMessage && <LoginMessage />}
            </div>

            <div
                className={`w-full transition-all duration-500 ${
                    animateLoginMessage ? "blur-sm pointer-events-none" : ""
                }`}
            >
                <div
                    className="
                        py-2
                        2xl:py-4
                        px-4
                        bg-gray-900
                        flex
                        items-center
                        justify-between
                        font-bold
                    "
                >
                    <h1 className="text-3xl">Chat</h1>
                    <p className="text-lg">Online: {onlineUsers}</p>
                </div>

                <div
                    id="messageBox"
                    className="
                        px-2
                        w-full
                        lg-chat-height
                        2xl:2xl-chat-height
                        bg-gray-800
                        flex
                        flex-col
                        overflow-y-scroll
                        scrollbar
                    "
                >
                    {messages.map((message, i) => (
                        <Message
                            key={i}
                            message={message}
                            isLastMessage={messages.length - 1 === i}
                        />
                    ))}
                </div>

                <div className="py-3 2xl:py-4 bg-gray-900">
                    <form onSubmit={handleMessage} className="mx-auto w-[90%] flex gap-4">
                        <input
                            type="text"
                            maxLength="128"
                            placeholder="Write a message..."
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            className="p-2 w-3/4 rounded-sm text-black"
                        />

                        <button
                            type="submit"
                            className="
                                py-2
                                px-4
                                bg-gray-700
                                hover:bg-gray-800
                                rounded-sm
                                font-bold
                                transition-colors 
                                duration-300
                            "
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;
