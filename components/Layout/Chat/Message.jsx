import Link from "next/link";
import Image from "next/image";

const Message = ({ message, lastMessage }) => {
    const { sender, content } = message;

    return (
        <div
            className={`py-3 w-full flex items-center justify-arround gap-2 ${
                !lastMessage ? "border-b-2 border-b-gray-900 border-solid" : ""
            }`}
        >
            <div className="w-1/5">
                <Link href={sender.profileUrl}>
                    <a className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-2 border-gray-700 border-solid overflow-hidden">
                            <Image
                                src={sender.profilePicture}
                                alt={sender.name}
                                width="48px"
                                height="48px"
                            />
                        </div>

                        {message.type === "message" && (
                            <Image
                                src="/imgs/icons/actions.svg"
                                alt="User Actions"
                                width="24px"
                                height="24px"
                                onClick={() => console.log("Displaying user actions.")}
                            />
                        )}
                    </a>
                </Link>
            </div>

            <div className="w-3/4 flex flex-col gap-1 font-medium text-sm break-words">
                <>
                    {message.type === "message" && (
                        <Link href={sender.profileUrl}>
                            <a className="px-1">{sender.name}:</a>
                        </Link>
                    )}

                    <p
                        className={`py-2 px-3 2xl:px-4 bg-gray-700 rounded-sm ${
                            message.type !== "message" ? "text-center" : ""
                        }`}
                    >
                        {message.type === "message" ? content : `${sender.name} ${content}`}
                    </p>
                </>
            </div>
        </div>
    );
};

export default Message;
