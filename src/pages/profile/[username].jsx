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
    const { user, logged } = useContext(AuthContext);
    const router = useRouter();

    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async username => {
        const request = await fetch(`/api/users/${username}`);
        const response = await request.json();

        if (response.status !== 200) return router.push("/");

        setUserProfile(response.data);
        setLoading(false);
    };

    useEffect(() => {
        if (!router.isReady) return;

        fetchUser(router.query.username.toLowerCase());
    }, [router.isReady]);

    useEffect(() => {
        if (user && user.username === userProfile?.username) setUserProfile(user);
    }, [user]);

    return (
        <Layout profile>
            <div className="p-8 min-h-[calc(100vh-9rem)] md:min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
                {userProfile && !loading ? (
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="relative w-52 h-52 rounded-full border-4 border-white overflow-hidden">
                                <ProfilePicture profilePicture={userProfile.profile.picture} />

                                {logged && user.username === userProfile.username && (
                                    <PictureInput username={userProfile.username} />
                                )}
                            </div>

                            <ProfileData
                                displayName={userProfile.profile.displayName}
                                createdAt={userProfile.createdAt}
                            />
                        </div>

                        {logged && user.username === userProfile.username && <LogoutButton />}
                    </div>
                ) : (
                    <Spinner size="64px" />
                )}
            </div>
        </Layout>
    );
};

export default Profile;
