import {} from "react";
import { useRouter } from "next/router";

import NavigationLink from "./NavigationLink";

const NavBar = () => {
    const { pathname } = useRouter();

    return (
        <div className="px-4 w-full md:w-auto md:max-w-full bg-gray-900 rounded-full">
            <div className="py-2 mx-auto overflow-x-auto scrollbar">
                <nav className="flex gap-2">
                    <NavigationLink link="home" active={"/" === pathname}>
                        Home
                    </NavigationLink>
                    <NavigationLink link="blackjack" active={"/blackjack" === pathname}>
                        BlackJack
                    </NavigationLink>
                    <NavigationLink link="dice" active={"/dice" === pathname}>
                        Dice
                    </NavigationLink>
                    <NavigationLink link="mines" active={"/mines" === pathname}>
                        Mines
                    </NavigationLink>
                    <NavigationLink link="roulette" active={"/roulette" === pathname}>
                        Roulette
                    </NavigationLink>
                    <NavigationLink link="slots" active={"/slots" === pathname}>
                        Slots
                    </NavigationLink>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
