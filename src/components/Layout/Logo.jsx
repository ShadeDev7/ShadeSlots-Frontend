import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <a className="max-w-[8rem] md:max-w-none col-start-2 transition-transform duration-300 hover:scale-110">
                <h1 className="font-pirataone text-4xl md:text-5xl text-center">Shade Slots</h1>
            </a>
        </Link>
    );
};

export default Logo;
