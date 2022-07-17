import { useRouter } from "next/router";

import NavigationLink from "./NavigationLink";

const NavBar = () => {
    const { pathname } = useRouter();

    return (
        <div className="px-4 w-full md:w-auto md:max-w-full bg-gray-900 rounded-full">
            <div className="py-2 mx-auto overflow-x-auto scrollbar">
                <nav className="flex gap-2">
                    <NavigationLink href="/" pathname={pathname}>
                        Home
                    </NavigationLink>

                    <NavigationLink href="/games/blackjack" pathname={pathname}>
                        BlackJack
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
