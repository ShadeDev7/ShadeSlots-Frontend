import Header from "./Header";
import Chat from "./Chat/Chat";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children }) => {
    return (
        <div className="w-full">
            <Header />

            <div className="w-full flex">
                <Chat />

                <div
                    className="
                        mt-12
                        mx-auto
                        w-[85%]
                        lg:w-[60%]
                        flex
                        flex-col
                        items-center
                        gap-8
                    "
                >
                    <NavBar />

                    <main className="w-full max-h-screen lg:overflow-y-scroll lg:scrollbar">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
