import { useContext } from "react";
import Image from "next/image";

import AuthContext from "../../../context/AuthContext/AuthContext";

const LoginButton = () => {
    const { setShowAuthModal } = useContext(AuthContext);

    return (
        <button
            onClick={() => setShowAuthModal(true)}
            className="flex items-center hover:scale-110 transition-transform select-none"
        >
            <Image src="/imgs/icons/login.svg" alt="Login" width="36px" height="36px" />
        </button>
    );
};

export default LoginButton;
