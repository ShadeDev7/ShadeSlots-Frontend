import {} from "react";
import { useRouter } from "next/router";

import NavigationLink from "./NavigationLink";

const NavBar = () => {
    const { pathname } = useRouter();

    return (
        <nav
            id="navbar"
            className="
                p-3
                w-full
                md:w-auto
                md:max-w-full
                bg-gray-900
                rounded-full
                flex
                items-center
                md:justify-center
                gap-2
                font-bold
                overflow-x-auto
                scrollbar
            "
        >
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
    );
};

export default NavBar;
