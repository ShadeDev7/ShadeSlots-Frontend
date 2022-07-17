import Link from "next/link";
import Image from "next/image";

const NavigationLink = ({ href, pathname, children }) => {
    return (
        <Link href={href}>
            <a
                className={`
                    py-2
                    px-4
                    mx-auto
                    ${href === pathname ? "bg-gray-700" : ""}
                    hover:bg-gray-700
                    rounded-full
                    flex
                    items-center
                    gap-2
                    font-medium
                    transition-colors
                    duration-300
                `}
            >
                <Image
                    src={`/imgs/icons/${children.toLowerCase()}.svg`}
                    alt={children}
                    width="16px"
                    height="16px"
                    layout="fixed"
                    priority
                />

                {children}
            </a>
        </Link>
    );
};

export default NavigationLink;
