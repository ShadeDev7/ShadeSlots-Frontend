import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import AuthContext from "../../context/AuthContext/AuthContext";

import { Header } from "../../components";
import { ProfileData } from "../../components/Profile";

const Profile = () => {
    const { logged } = useContext(AuthContext);
    const [user, setUser] = useState(null);

    const router = useRouter();
    const { username } = router.query;

    const fetchUser = async () => {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URI}/users/${username}`;
        const request = await fetch(url);
        const response = await request.json();

        if (response.status !== 200) return router.push("/", "/");

        setUser(response.data);
    };

    useEffect(() => {
        if (!router.isReady) return;

        if (!username) {
            router.push("/", "/");
        } else {
            fetchUser();
        }
    }, [router.isReady]);

    return (
        <>
            <Header />

            {user && (
                <main
                    className="
                        my-8
                        p-8
                        mx-auto
                        w-full
                        flex
                        flex-col
                        items-center
                        justify-center
                    "
                >
                    <ProfileData logged={logged} user={user} />
                </main>
            )}
        </>
    );
};

export default Profile;
