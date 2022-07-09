import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import AuthContext from "../../../context/AuthContext/AuthContext";

const ProfileButton = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="mx-auto w-9 h-9">
            <Link
                href={`/profile/${user.username}`}
                className="flex items-center hover:scale-110 transition-transform select-none"
            >
                <a>
                    <Image src="/imgs/icons/profile.svg" alt="Profile" width="36px" height="36px" />
                </a>
            </Link>
        </div>
    );
};

export default ProfileButton;
