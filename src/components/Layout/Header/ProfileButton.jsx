import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import AuthContext from "../../../context/AuthContext/AuthContext";

const ProfileButton = () => {
    const { logged, user } = useContext(AuthContext);

    return (
        <Link href={`/profile/${user.username}`}>
            <a>
                <div
                    className="
                        relative
                        w-full
                        h-full
                        rounded-full
                        border-2
                        border-white
                        transition-transform
                        duration-300
                        hover:scale-110
                    "
                >
                    <Image
                        src={user.profile.picture}
                        alt={`${user.profile.displayName} Profile`}
                        layout="fill"
                        objectFit="cover"
                        quality={50}
                        priority
                        className="rounded-full"
                    />
                </div>
            </a>
        </Link>
    );
};

export default ProfileButton;
