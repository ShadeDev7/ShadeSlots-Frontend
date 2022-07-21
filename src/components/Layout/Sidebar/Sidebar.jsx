import { useContext, useEffect } from "react";

import AuthContext from "../../../context/AuthContext/AuthContext";
import SidebarContext from "../../../context/SidebarContext/SidebarContext";
import SidebarActionButton from "./SidebarActionButton";
import SidebarTabButton from "./SidebarTabButton";
import Menu from "./Menu/Menu";
import Chat from "./Chat/Chat";

const Sidebar = () => {
    const { logged } = useContext(AuthContext);
    const { showSidebar, sidebarTab, setShowSidebar, setSidebarTab } = useContext(SidebarContext);

    useEffect(() => {
        if (logged && showSidebar) setShowSidebar(false);
    }, [logged]);

    return (
        <div
            className={`
                fixed
                z-[2]
                bottom-0
                md:bottom-auto
                w-full
                ${
                    showSidebar
                        ? "md:w-4/12 lg:w-3/12 xl:w-1/5 2xl:w-2/12 max-h-[calc(100%-6rem)]"
                        : "md:w-16 max-h-12"
                }
                h-full
                md:min-h-[calc(100%-5rem)]
                bg-gray-800
                transition-all
                duration-500
            `}
        >
            <SidebarActionButton showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className="w-full h-full md:min-h-screen flex flex-col">
                <div
                    className={`
                        w-full
                        ${showSidebar ? "max-w-full" : "md:w-0 md:max-w-0 md:opacity-0"}
                        h-12
                        flex
                        transition-all
                        duration-500
                    `}
                >
                    <SidebarTabButton
                        tab="menu"
                        sidebarTab={sidebarTab}
                        setSidebarTab={setSidebarTab}
                    />

                    <SidebarTabButton
                        tab="chat"
                        sidebarTab={sidebarTab}
                        setSidebarTab={setSidebarTab}
                    />
                </div>

                <div
                    className={`
                        w-full
                        h-[calc(100%-6rem)]
                        ${showSidebar ? "md:h-[calc(100%-12rem)]" : "md:h-[calc(100%-9rem)]"}
                    `}
                >
                    {sidebarTab === "menu" ? (
                        <Menu showSidebar={showSidebar} />
                    ) : (
                        <Chat showSidebar={showSidebar} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
