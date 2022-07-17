import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <a className="col-start-2 transition-transform duration-300 hover:scale-110">
                <h1 className="font-pirataone text-5xl text-center">Shade Slots</h1>
            </a>
        </Link>
    );
};

export default Logo;
