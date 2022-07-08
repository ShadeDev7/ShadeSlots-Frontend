import Image from "next/image";

const ProfileButton = () => {
    const handleProfile = () => {
        console.log("handleProfile");
    };

    return (
        <button
            onClick={handleProfile}
            className="flex items-center hover:scale-110 transition-transform select-none"
        >
            <Image src="/imgs/icons/profile.svg" alt="Login" width="36px" height="36px" />
        </button>
    );
};

export default ProfileButton;
