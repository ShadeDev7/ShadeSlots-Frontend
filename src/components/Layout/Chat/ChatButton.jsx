import Image from "next/image";

const ChatButton = ({ showChat, setShowChat }) => {
    return (
        <button
            aria-label={`${showChat ? "Hide" : "Show"} chat button`}
            onClick={() => setShowChat(!showChat)}
            className="w-full h-12 md:h-16 bg-gray-900 flex items-center justify-center shadow-lg"
        >
            <Image src="/imgs/icons/chat.svg" alt="Chat" width="20px" height="20px" />
        </button>
    );
};

export default ChatButton;
