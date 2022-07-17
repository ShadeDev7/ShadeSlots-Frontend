import Image from "next/image";

const ProfilePicture = ({ profilePicture }) => {
    return (
        <Image
            src={profilePicture}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-full"
        />
    );
};

export default ProfilePicture;
