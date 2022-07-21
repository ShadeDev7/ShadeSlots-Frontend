import { useContext } from "react";

import AuthContext from "../../context/AuthContext/AuthContext";

const LogoutButton = () => {
    const { handleSession } = useContext(AuthContext);

    return (
        <button
            onClick={() => handleSession(null, true)}
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
