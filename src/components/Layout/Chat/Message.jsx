import { useState, useEffect } from "react";
import Image from "next/image";

const Message = ({ sender, profilePicture, content, isLastMessage, showChat }) => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowContent(showChat);
        }, 275);
    }, [showChat]);

    return (
        <div
            className={`py-4 mx-auto w-[90%] ${
                isLastMessage ? "border-b-2 border-gray-900" : ""
            } flex items-center justify-around gap-2`}
        >
            <a
                href={`/profile/${sender}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[25%] flex flex-col items-center justify-center gap-2 font-medium"
            >
                {showChat && showContent && <p className="text-center break-all">{sender}</p>}

                <div className="relative w-10 h-10 rounded-full border-2 border-red">
                    <Image
                        src={profilePicture}
                        alt="Profile picture"
                        layout="fill"
                        objectFit="cover"
                        quality={50}
                        className="rounded-full"
                    />
                </div>
            </a>

            {showChat && showContent && (
                <p className="p-2 w-full max-w-[75%] bg-gray-700 rounded">{content}</p>
            )}
        </div>
    );
};

export default Message;
