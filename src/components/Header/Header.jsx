import { useContext } from "react";
import Link from "next/link";

import AuthContext from "../../context/AuthContext/AuthContext";

import ProfileButton from "./ProfileButton";
import LoginButton from "./LoginButton";

const Header = () => {
    const { logged } = useContext(AuthContext);

    return (
        <header className="py-3 grid grid-cols-3 items-center justify-items-center shadow-xl">
            <Link href="/">
                <a className="col-start-2 transition-transform duration-300 hover:scale-110">
                    <h1 className="font-pirataone text-5xl">Shade</h1>
                </a>
            </Link>

            <div className="w-12 h-12">{logged ? <ProfileButton /> : <LoginButton />}</div>
        </header>
    );
};

export default Header;
