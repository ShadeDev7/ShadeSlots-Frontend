import { useContext, useState, useEffect } from "react";
import Image from "next/image";

import { millisToDate, fileToBase64 } from "../../utils";
import AuthContext from "../../context/AuthContext/AuthContext";

const ProfileData = ({ logged, user }) => {
    const { user: ctxUser, handleAuthToken } = useContext(AuthContext);

    const [profilePictureSrc, setProfilePictureSrc] = useState(user.profile.picture);
    const [uploadedPicture, setUploadedPicture] = useState(null);

    const uploadProfilePicture = async (profilePicture, extension) => {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URI}/users/${user.username}/updateProfilePicture`;

        const request = await fetch(url, {
            headers: { "Content-Type": "application/json" },
            method: "PATCH",
            body: JSON.stringify({ profilePicture, extension }),
        });
        const response = await request.json();

        if (response.status !== 200) return;

        handleAuthToken(response.token);
    };

    useEffect(() => {
        if (!uploadedPicture || uploadedPicture.size / 1024 >= 2048) return;

        fileToBase64(uploadedPicture)
            .then(profilePicture => {
                const filenameSegments = uploadedPicture.name.split(".");

                uploadProfilePicture(profilePicture, filenameSegments[filenameSegments.length - 1]);
            })
            .catch(e => console.log(e));
    }, [uploadedPicture]);

    useEffect(() => {
        setProfilePictureSrc(ctxUser.profile.picture);
    }, [ctxUser]);

    return (
        <div className="flex flex-col gap-2">
            <div className="relative w-52 h-52 rounded-full border-4 border-white">
                <Image
                    src={profilePictureSrc}
                    layout="fill"
                    objectFit="contain"
                    priority
                    quality={100}
                    className="rounded-full w-52 h-52"
                />

                {logged && (
                    <>
                        <label
                            htmlFor="profilePicture"
                            className="
                                w-full
                                h-full
                                relative
                                z-[1]
                                bg-gray-700/80
                                rounded-full
                                flex
                                items-center
                                justify-center
                                opacity-0
                                hover:opacity-100
                                hover:cursor-pointer
                                transition-opacity
                                duration-500
                            "
                        >
                            <Image src="/imgs/icons/add.svg" width="48px" height="48px" />
                        </label>

                        <input
                            id="profilePicture"
                            name="profilePicture"
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            onChange={e => setUploadedPicture(e.target.files[0])}
                            className="hidden"
                        />
                    </>
                )}
            </div>

            <div className="flex flex-col items-center gap-2">
                <h1 className="font-bold text-4xl">{user.username}</h1>
                <p className="font-light text-sm text-gray-200">
                    Joined {millisToDate(user.createdAt)}
                </p>
            </div>
        </div>
    );
};

export default ProfileData;
