import { useContext, useState, useEffect } from "react";
import Image from "next/image";

import AuthContext from "../../context/AuthContext/AuthContext";
import { fileToBase64 } from "../../utils";

const PictureInput = ({ username }) => {
    const { setShowLoadingModal, handleSession } = useContext(AuthContext);
    const [uploadedPicture, setUploadedPicture] = useState(null);

    const updateProfilePicture = async base64Image => {
        const request = await fetch(`/api/users/${username}/updateProfilePicture`, {
            headers: { "Content-Type": "application/json" },
            method: "PATCH",
            body: JSON.stringify({ picture: base64Image }),
        });
        const response = await request.json();

        if (response.status !== 200) return;

        setShowLoadingModal(false, 1500);
        handleSession(response.data);
        setUploadedPicture(null);
    };

    useEffect(() => {
        if (!uploadedPicture || uploadedPicture.size / 1024 > 1024) return;

        setShowLoadingModal(true);

        fileToBase64(uploadedPicture)
            .then(updateProfilePicture)
            .catch(() => setUploadedPicture(null));
    }, [uploadedPicture]);

    return (
        <>
            <label
                htmlFor="profilePicture"
                className="relative z-[1] w-full h-full bg-gray-700/70 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 hover:cursor-pointer transition-opacity duration-500"
            >
                <Image
                    src="/imgs/icons/circle_add.svg"
                    alt="Update profile picture"
                    width="48px"
                    height="48px"
                />
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
    );
};

export default PictureInput;
