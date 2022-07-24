import { useContext } from "react";
import Image from "next/image";

import AuthContext from "../../../context/AuthContext/AuthContext";

const LoginButton = () => {
    const { setShowAuthModal } = useContext(AuthContext);

    return (
        <button
            aria-label="Login button"
            onClick={() => setShowAuthModal(true)}
            className="relative w-full h-full transition-transform duration-300 hover:scale-110"
        >
            <Image src="/imgs/icons/login.svg" alt="Login" layout="fill" objectFit="cover" />
        </button>
    );
};

export default LoginButton;
