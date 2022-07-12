import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import AuthContext from "../../context/AuthContext/AuthContext";

const ProfileButton = () => {
    const { user } = useContext(AuthContext);

    return (
        <Link href={`/profile/${user.username}`}>
            <a className="flex flex-col items-center hover:scale-110 transition-transform">
                <div className="w-10 h-10 rounded-full border-2 border-white border-solid overflow-hidden">
                    <Image src={user.profile.picture} alt="Profile" width="40px" height="40px" />
                </div>
            </a>
        </Link>
    );
};

export default ProfileButton;
