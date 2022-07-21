import Image from "next/image";

const SidebarTabButton = ({ tab, sidebarTab, setSidebarTab }) => {
    return (
        <button
            onClick={tab !== sidebarTab ? () => setSidebarTab(tab) : null}
            className={`
                w-full
                h-full
                ${tab === sidebarTab ? "bg-gray-900" : ""}
                flex
                items-center
                justify-center
                transition-colors
                duration-300
            `}
        >
            <Image src={`/imgs/icons/${tab}.svg`} width="20px" height="20px" />
        </button>
    );
};

export default SidebarTabButton;
