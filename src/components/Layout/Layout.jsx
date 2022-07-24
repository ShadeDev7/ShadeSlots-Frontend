import { useContext } from "react";

import AuthContext from "../../context/AuthContext/AuthContext";
import LoadingModal from "./LoadingModal";
import AuthModal from "./AuthModal/AuthModal";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Chat from "./Chat/Chat";

const Layout = ({ profile = false, children }) => {
    const { showLoadingModal, showAuthModal } = useContext(AuthContext);

    return (
        <>
            {showLoadingModal && <LoadingModal />}
            {showAuthModal && <AuthModal />}

            <Header />

            <div className="w-full h-[calc(100vh-9rem)] md:h-[calc(100vh-5rem)] flex">
                <div className="md:order-2 w-full md:w-[calc(100%-4rem)] h-full flex flex-col items-center overflow-y-auto scrollbar">
                    {!profile && <NavBar />}

                    <div className={`${profile ? "" : "mt-[5.5rem]"} w-full h-full`}>
                        <main className="mx-auto w-[90%] md:w-[85%] lg:w-4/5 xl:w-3/4 2xl:w-[70%] flex flex-col items-center">
                            {children}
                        </main>
                    </div>
                </div>

                <Chat />
            </div>
        </>
    );
};

export default Layout;
