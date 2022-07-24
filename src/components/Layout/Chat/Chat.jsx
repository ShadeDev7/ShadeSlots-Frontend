import { useContext, useEffect } from "react";

import AuthContext from "../../../context/AuthContext/AuthContext";
import ChatContext from "../../../context/ChatContext/ChatContext";
import ChatButton from "./ChatButton";
import Message from "./Message";
import MessageInput from "./MessageInput";

const Chat = () => {
    const { logged } = useContext(AuthContext);
    const { showChat, setShowChat, messages } = useContext(ChatContext);

    useEffect(() => {
        if (logged && showChat) setShowChat(false);
    }, [logged]);

    return (
        <div
            className={`md:order-1 fixed md:static z-[1] md:z-[0] bottom-0 md:bottom-auto w-full h-full md:max-h-full ${
                showChat
                    ? "md:w-[35%] xl:w-[30%] 2xl:w-1/4 max-h-[calc(100vh-6rem)]"
                    : "md:w-16 max-h-12"
            } bg-gray-800 transition-all duration-300`}
        >
            <ChatButton showChat={showChat} setShowChat={setShowChat} />

            <div className="h-[calc(100%-3rem)] md:h-[calc(100%-4rem)]">
                <div
                    className={`mx-auto w-full h-full ${
                        showChat ? "max-h-[calc(100%-4rem)]" : "max-h-full"
                    } flex flex-col items-center overflow-y-auto scrollbar transition-all duration-300`}
                >
                    {messages.map((message, index) => (
                        <Message
                            key={index}
                            {...message}
                            isLastMessage={messages.length - 1 !== index}
                            showChat={showChat}
                        />
                    ))}
                </div>

                <MessageInput />
            </div>
        </div>
    );
};

export default Chat;
