import { useContext } from "react";
import { useRouter } from "next/router";

import AuthContext from "../../context/AuthContext/AuthContext";

const LogoutButton = () => {
    const { handleSession } = useContext(AuthContext);
    const router = useRouter();

    return (
        <button
            onClick={() => handleSession(null, router.push)}
            className="
                mx-auto
                py-2
                w-36
                bg-gray-900
                hover:bg-slate-900
                rounded
                font-bold
                transition-colors
                duration-300
            "
        >
            Log Out
        </button>
    );
};

export default LogoutButton;
