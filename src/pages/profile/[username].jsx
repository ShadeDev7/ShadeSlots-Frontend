import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

import AuthContext from "../../context/AuthContext/AuthContext";
import {
    Layout,
    ProfilePicture,
    PictureInput,
    ProfileData,
    LogoutButton,
    Spinner,
} from "../../components";

const Profile = () => {
    const { user: ctxUser, logged } = useContext(AuthContext);
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async username => {
        const request = await fetch(`/api/users/${username}`);
        const response = await request.json();

        if (response.status !== 200) return router.push("/");

        setLoading(false);
        setUser(response.data);
    };

    useEffect(() => {
        if (!router.isReady) return;

        fetchUser(router.query.username.toLowerCase());
    }, [router.isReady]);

    useEffect(() => {
        if (!logged || ctxUser?.username !== user?.username) return;

        setUser(ctxUser);
    }, [ctxUser]);

    return (
        <Layout profile>
            <div className="my-8 p-8 mx-auto flex flex-col items-center justify-center">
                {user ? (
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="relative w-52 h-52 rounded-full border-4 border-white overflow-hidden">
                                <ProfilePicture profilePicture={user.profile.picture} />

                                {logged && ctxUser.username === user.username && (
                                    <PictureInput username={user.username} />
                                )}
                            </div>

                            <ProfileData
                                displayName={user.profile.displayName}
                                createdAt={user.createdAt}
                            />
                        </div>

                        {logged && ctxUser.username === user.username && <LogoutButton />}
                    </div>
                ) : (
                    <Spinner size="64px" />
                )}
            </div>
        </Layout>
    );
};

export default Profile;
