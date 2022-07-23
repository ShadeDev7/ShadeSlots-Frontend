import Image from "next/image";

const ProfilePicture = ({ profilePicture }) => {
    return (
        <Image
            src={profilePicture}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="rounded-full"
        />
    );
};

export default ProfilePicture;
