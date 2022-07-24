import { useState } from "react";
import Image from "next/image";

const MessageInput = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // Verifying that the message is not empty.

        // Sending the message

        // Cleaning the message input
        setMessage("");
    };

    return (
        <div className="w-full h-16 bg-gray-900">
            <form
                onSubmit={handleSubmit}
                className="mx-auto w-[90%] h-full flex items-center justify-around"
            >
                <input
                    type="text"
                    placeholder="Your message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="p-2 w-3/4 bg-transparent rounded-md border-2 border-gray-600 outline-none"
                />

                <button
                    aria-label="Send message button"
                    type="submit"
                    className="w-8 h-8 flex items-center justify-center"
                >
                    <Image
                        src="/imgs/icons/send.svg"
                        alt="Send message"
                        width="32px"
                        height="32px"
                        layout="fixed"
                    />
                </button>
            </form>
        </div>
    );
};

export default MessageInput;
