import { useContext } from "react";
import Link from "next/link";

import AuthContext from "../../../context/AuthContext/AuthContext";

import ProfileButton from "./ProfileButton";
import LoginButton from "./LoginButton";

const Header = () => {
    const { logged } = useContext(AuthContext);

    return (
        <header className="py-3 md:py-2 2xl:py-3 grid grid-cols-3 justify-items-center shadow-xl">
            <Link href="/">
                <a className="col-start-2 hover:scale-110 transition-transform duration-300 select-none">
                    <h1 className="logo-font text-5xl md:text-4xl 2xl:text-5xl">Shade</h1>
                </a>
            </Link>

            {logged ? <ProfileButton /> : <LoginButton />}
        </header>
    );
};

export default Header;
