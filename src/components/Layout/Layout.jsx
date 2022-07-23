import { useContext } from "react";

import AuthContext from "../../context/AuthContext/AuthContext";
import LoadingModal from "./LoadingModal";
import AuthModal from "./AuthModal/AuthModal";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

const Layout = ({ profile = false, children }) => {
    const { showLoadingModal, showAuthModal } = useContext(AuthContext);

    return (
        <>
            {showLoadingModal && <LoadingModal />}
            {showAuthModal && <AuthModal />}

            <Header />
            <Sidebar />

            <div
                className={`
                    w-full
                    min-h-[calc(100vh-9rem)]
                    md:min-h-[calc(100vh-5rem)]
                    flex
                    flex-col
                    items-center
                    ${profile ? "justify-center" : ""}
                `}
            >
                {!profile && <NavBar />}

                <div
                    className={`
                        ${!profile ? "mt-24" : ""}
                        w-full
                        h-full
                        max-h-[calc(100vh-15rem)]
                        md:max-h-[calc(100vh-10.5rem)]
                        flex
                        flex-col
                        items-center
                        gap-6
                        overflow-y-auto
                        scrollbar
                    `}
                >
                    <main
                        className="
                            w-[90%]
                            md:w-4/5
                            lg:w-3/4
                            xl:w-[70%]
                            h-full
                            flex
                            flex-col
                            items-center
                        "
                    >
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default Layout;
