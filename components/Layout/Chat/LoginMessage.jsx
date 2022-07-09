import { useContext } from "react";

import AuthContext from "../../../context/AuthContext/AuthContext";

const LoginMessage = () => {
    const { setShowAuthModal } = useContext(AuthContext);

    return (
        <>
            <p className="text-2xl">Please Log in.</p>

            <button
                onClick={() => setShowAuthModal(true)}
                className="py-2 w-1/2 bg-gray-900 rounded"
            >
                Log In
            </button>
        </>
    );
};

export default LoginMessage;
