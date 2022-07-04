import { useContext, useState } from "react";

import ChatContext from "../../../context/ChatContext/ChatContext";

import Message from "./Message";

import { trimAll } from "../../../utils";

const Chat = () => {
    const { onlineUsers, messages, sendMessage } = useContext(ChatContext);

    const [message, setMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const msg = trimAll(message);
        if (!msg) return setMessage("");

        sendMessage(message);
        setMessage("");
    };

    return (
        <div className="hidden lg:block w-1/4 lg:w-1/5">
            <div className="p-4 bg-gray-900 flex justify-between items-center font-bold">
                <h1 className="text-3xl">Chat</h1>
                <p className="text-lg">Online: {onlineUsers}</p>
            </div>

            <div className="px-2 w-full chat-height bg-gray-800 flex flex-col overflow-y-scroll scrollbar">
                {messages.map((message, i) => (
                    <Message key={i} message={message} lastMessage={messages.length - 1 === i} />
                ))}
            </div>

            <div className="py-4 bg-gray-900">
                <form onSubmit={handleSubmit} className="mx-auto w-[90%] flex gap-4">
                    <input
                        type="text"
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
    );
};

export default Chat;
