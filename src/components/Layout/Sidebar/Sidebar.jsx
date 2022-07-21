import { useContext } from "react";

import SidebarContext from "../../../context/SidebarContext/SidebarContext";
import SidebarActionButton from "./SidebarActionButton";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
    const { showSidebar, setShowSidebar } = useContext(SidebarContext);

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

            <SidebarContent />
        </div>
    );
};

export default Sidebar;
