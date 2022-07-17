import { useContext } from "react";
import Image from "next/image";

import AuthContext from "../../context/AuthContext/AuthContext";

const LoginButton = () => {
    const { setShowAuthModal } = useContext(AuthContext);

    return (
        <button
            onClick={() => setShowAuthModal(true)}
            className="w-full h-full relative transition-transform duration-300 hover:scale-110"
        >
            <Image src="/imgs/icons/login.svg" alt="Login" layout="fill" objectFit="cover" />
        </button>
    );
};

export default LoginButton;
