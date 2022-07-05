import Link from "next/link";

const Header = () => {
    return (
        <header className="py-3 md:py-2 2xl:py-3 flex items-center justify-center shadow-xl">
            <Link href="/">
                <a className="hover:scale-110 transition-transform duration-300 select-none">
                    <h1 className="logo-font text-5xl md:text-4xl 2xl:text-5xl">Shade</h1>
                </a>
            </Link>
        </header>
    );
};

export default Header;
