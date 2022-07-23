import { useContext, useState, useEffect } from "react";

import AuthContext from "../../../context/AuthContext/AuthContext";
import AuthForm from "./AuthForm";
import Spinner from "../../Spinner";

const AuthModal = () => {
    const { modal, setShowAuthModal, setAuthModal } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleModalExit = e => {
        if (e.target.id !== "authModal") return;

        document.getElementById("authModal").classList.toggle("opacity-0");

        setTimeout(() => {
            setShowAuthModal(false);
        }, 300);
    };

    useEffect(() => {
        setTimeout(() => {
            document.getElementById("authModal").classList.toggle("opacity-0");
        }, 50);
    }, []);

    return (
        <div
            id="authModal"
            className="
                z-[3]
                absolute
                w-full
                min-h-screen
                bg-black/80
                flex
                items-center
                opacity-0
                transition-opacity
                duration-300
                hover:cursor-pointer
            "
            onClick={handleModalExit}
        >
            <div
                className="
                    mx-auto
                    p-10
                    w-4/5
                    md:w-3/5
                    lg:w-1/2
                    xl:w-2/5
                    2xl:w-[30%]
                    bg-gray-800
                    rounded
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-6
                    hover:cursor-auto
                "
            >
                <div className="w-full flex justify-around rounded font-bold">
                    <button
                        onClick={modal !== "signin" ? () => setAuthModal("signin") : null}
                        className={`
                            py-2
                            w-full
                            rounded-l
                            ${modal === "signin" ? "bg-gray-900" : "bg-gray-700"}`}
                    >
                        Sign In
                    </button>

                    <button
                        onClick={modal !== "login" ? () => setAuthModal("login") : null}
                        className={`
                            py-2
                            w-full
                            rounded-r
                            ${modal === "login" ? "bg-gray-900" : "bg-gray-700"}`}
                    >
                        Log In
                    </button>
                </div>

                <AuthForm variant={modal} loading={loading} setLoading={setLoading} />

                {loading && <Spinner size="48px" />}
            </div>
        </div>
    );
};

export default AuthModal;
