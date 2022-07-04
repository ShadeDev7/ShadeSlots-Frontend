import Link from "next/link";
import Image from "next/image";

const NavigationLink = ({ link, active, children }) => {
    return (
        <Link href={link === "home" ? "/" : `/${link}`}>
            <a
                className={`
                    py-2
                    px-4
                    rounded-full
                    flex
                    items-center
                    gap-2
                    hover:bg-gray-700
                    transition-colors
                    duration-300
                    ${active ? "bg-gray-700" : ""}
                `}
            >
                <Image src={`/imgs/icons/${link}.svg`} width="16px" height="16px" layout="fixed" />
                <p className="inline">{children}</p>
            </a>
        </Link>
    );
};

export default NavigationLink;