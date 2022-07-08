import { useContext, useEffect } from "react";

import AuthContext from "../../../context/AuthContext/AuthContext";

import AuthForm from "./AuthForm";

const AuthModal = () => {
    const { modal, setShowAuthModal, setAuthModal } = useContext(AuthContext);

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
                z-[1]
                absolute
                w-full
                min-h-screen
                bg-black
                bg-opacity-80
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
<<<<<<< HEAD
                    gap-6
=======
                    gap-8
>>>>>>> 4e95d4c6998c70e93600ee601832d8ccf80bef8b
                    hover:cursor-auto
                "
            >
                <div className="w-full flex justify-around bg-gray-900 rounded">
                    <button
<<<<<<< HEAD
                        onClick={modal !== "signin" ? () => setAuthModal("signin") : null}
                        className={`py-2 w-full rounded-l font-bold transition-colors duration-300 ${
                            modal === "signin" ? "bg-gray-700" : "hover:bg-slate-900"
=======
                        onClick={modal !== "signin" ? () => setAuthModal("signin") : undefined}
                        className={`py-2 w-full rounded-l font-bold transition-colors duration-300 ${
                            modal === "signin" ? "bg-gray-700" : ""
>>>>>>> 4e95d4c6998c70e93600ee601832d8ccf80bef8b
                        }`}
                    >
                        Sign In
                    </button>

                    <button
<<<<<<< HEAD
                        onClick={modal !== "login" ? () => setAuthModal("login") : null}
                        className={`py-2 w-full rounded-r font-bold transition-colors duration-300 ${
                            modal === "login" ? "bg-gray-700" : "hover:bg-slate-900"
=======
                        onClick={modal !== "singin" ? () => setAuthModal("login") : undefined}
                        className={`py-2 w-full rounded-r font-bold transition-colors duration-300 ${
                            modal === "login" ? "bg-gray-700" : ""
>>>>>>> 4e95d4c6998c70e93600ee601832d8ccf80bef8b
                        }`}
                    >
                        Log In
                    </button>
                </div>

<<<<<<< HEAD
                <div className="w-full">
                    <AuthForm variant={modal} />
                </div>
=======
                <AuthForm variant={modal} />
>>>>>>> 4e95d4c6998c70e93600ee601832d8ccf80bef8b
            </div>
        </div>
    );
};

export default AuthModal;
