import { useContext } from "react";

import AuthContext from "../../context/AuthContext/AuthContext";
import LoadingModal from "./LoadingModal";
import AuthModal from "./AuthModal/AuthModal";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children, profile = false }) => {
    const { showLoadingModal, showAuthModal } = useContext(AuthContext);

    return (
        <>
            {showLoadingModal && <LoadingModal />}
            {showAuthModal && <AuthModal />}

            <Header />
            <Sidebar />

            <div className="mx-auto py-6 w-full max-h-screen flex flex-col items-center overflow-y-scroll scrollbar">
                {!profile && <NavBar />}

                <main className="my-16 w-full flex flex-col items-center justify-center">
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;
