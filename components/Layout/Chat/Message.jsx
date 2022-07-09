import Link from "next/link";
import Image from "next/image";

const Message = ({ message, isLastMessage }) => {
    const { username, profilePicture, content } = message;

    return (
        <div
            className={`py-3 w-full flex items-center justify-arround gap-2 ${
                !isLastMessage ? "border-b-2 border-b-gray-900 border-solid" : ""
            }`}
        >
            <div className="w-1/5">
                <Link href={`/profile/${username}`}>
                    <a className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-2 border-gray-700 border-solid overflow-hidden">
                            <Image
                                src={profilePicture}
                                alt={`${username} Profile Picture`}
                                width="48px"
                                height="48px"
                            />
                        </div>

                        <Image
                            src="/imgs/icons/actions.svg"
                            alt="User Actions"
                            width="24px"
                            height="24px"
                            onClick={() => console.log("Displaying user actions.")}
                        />
                    </a>
                </Link>
            </div>

            <div className="w-3/4 flex flex-col gap-1 font-medium text-sm break-words">
                <Link href={`/profile/${username}`}>
                    <a className="px-1">{username}:</a>
                </Link>

                <p className="py-2 px-3 2xl:px-4 bg-gray-700 rounded-sm">{content}</p>
            </div>
        </div>
    );
};

export default Message;
