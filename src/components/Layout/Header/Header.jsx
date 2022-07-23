import { useContext } from "react";

import AuthContext from "../../../context/AuthContext/AuthContext";
import Logo from "../Logo";
import ProfileButton from "./ProfileButton";
import LoginButton from "./LoginButton";

const Header = () => {
    const { logged } = useContext(AuthContext);

    return (
        <header
            className="
                py-2
                md:py-4
                w-full
                bg-slate-800
                grid
                grid-cols-3
                items-center
                justify-items-center
                shadow-xl
            "
        >
            <Logo />

            <div className="w-12 h-12">{logged ? <ProfileButton /> : <LoginButton />}</div>
        </header>
    );
};

export default Header;
