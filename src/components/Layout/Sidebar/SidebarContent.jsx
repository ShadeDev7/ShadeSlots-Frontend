import { useRouter } from "next/router";

import SidebarLink from "./SidebarLink";

const Sidebar = () => {
    const { pathname } = useRouter();

    return (
        <div
            className="
                py-4
                w-full
                h-full
                md:min-h-screen
                max-h-[calc(100%-3rem)]
                md:max-h-[calc(100%-4rem)]
                flex
                flex-col
                items-center
                gap-2
                overflow-y-auto
                scrollbar
            "
        >
            <SidebarLink href="/" pathname={pathname}>
                Home
            </SidebarLink>

            <SidebarLink href="/games/blackjack" pathname={pathname}>
                Blackjack
            </SidebarLink>

            <SidebarLink href="/games/dice" pathname={pathname}>
                Dice
            </SidebarLink>

            <SidebarLink href="/games/mines" pathname={pathname}>
                Mines
            </SidebarLink>

            <SidebarLink href="/games/roulette" pathname={pathname}>
                Roulette
            </SidebarLink>

            <SidebarLink href="/games/slots" pathname={pathname}>
                Slots
            </SidebarLink>
        </div>
    );
};

export default Sidebar;
