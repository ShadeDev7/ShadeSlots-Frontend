import Link from "next/link";

const Header = () => {
    return (
        <header className="py-3 flex items-center justify-center shadow-xl">
            <Link href="/">
                <a className="hover:scale-110 transition-transform duration-300">
                    <h1 className="logo-font text-5xl">Shade</h1>
                </a>
            </Link>
        </header>
    );
};

export default Header;
