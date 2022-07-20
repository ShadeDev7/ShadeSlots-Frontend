import { useRouter } from "next/router";

import NavigationLink from "./NavigationLink";

const NavBar = () => {
    const { pathname } = useRouter();

    return (
        <div className="px-4 fixed w-auto max-w-[90%] md:max-w-[75%] lg:max-w-[60%] bg-gray-900 rounded-full shadow-lg">
            <div className="py-2 mx-auto overflow-x-auto scrollbar">
                <nav className="flex gap-2">
                    <NavigationLink href="/" pathname={pathname}>
                        Home
                    </NavigationLink>

                    <NavigationLink href="/games/blackjack" pathname={pathname}>
                        Blackjack
                    </NavigationLink>

                    <NavigationLink href="/games/dice" pathname={pathname}>
                        Dice
                    </NavigationLink>

                    <NavigationLink href="/games/mines" pathname={pathname}>
                        Mines
                    </NavigationLink>

                    <NavigationLink href="/games/roulette" pathname={pathname}>
                        Roulette
                    </NavigationLink>

                    <NavigationLink href="/games/slots" pathname={pathname}>
                        Slots
                    </NavigationLink>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
