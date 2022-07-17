import { useContext } from "react";
import Head from "next/head";

import AuthContext from "../../context/AuthContext/AuthContext";

import Header from "../Header/Header";
import AuthModal from "../AuthModal/AuthModal";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children, profile = false }) => {
    const { showAuthModal } = useContext(AuthContext);

    return (
        <>
            <Head>
                <title>Shade Slots</title>
            </Head>

            <>
                {showAuthModal && <AuthModal />}

                <Header />

                <div className="my-8 2xl:my-12 mx-auto w-[85%] md:w-3/4 lg:w-3/5 2xl:1/2 flex flex-col items-center gap-8 2xl:gap-16">
                    {!profile && <NavBar />}

                    <main className="w-full flex flex-col items-center">{children}</main>
                </div>
            </>
        </>
    );
};

export default Layout;
