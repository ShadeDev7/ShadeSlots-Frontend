import Image from "next/image";

const SidebarActionButton = ({ showSidebar, setShowSidebar }) => {
    return (
        <button
            onClick={() => setShowSidebar(!showSidebar)}
            className={`
                w-full
                h-12
                md:h-16
                bg-gray-900
                flex
                items-center
                justify-center
                shadow-lg
            `}
        >
            <Image
                src="/imgs/icons/sidebar.svg"
                width="28px"
                height="28px"
                className={`${
                    showSidebar ? "-rotate-90 md:rotate-0" : "rotate-90 md:-rotate-180"
                } transition-all duration-500`}
            />
        </button>
    );
};

export default SidebarActionButton;
