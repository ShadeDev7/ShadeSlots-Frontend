import Link from "next/link";
import Image from "next/image";

const SidebarLink = ({ href, pathname, children }) => {
    return (
        <Link href={href}>
            <a
                className={`
                    p-3
                    ${href === pathname ? "bg-gray-700" : "hover:bg-gray-700"}
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-colors
                    duration-300
                `}
            >
                <Image
                    src={`/imgs/icons/${children.toLowerCase()}.svg`}
                    alt={children}
                    width="20px"
                    height="20px"
                />
            </a>
        </Link>
    );
};

export default SidebarLink;
