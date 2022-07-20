import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="ShadeSlots is a NON-REAL money casino game, including blackjack, roulette, slots, and more!"
                />
                <meta property="og:title" content="Shade Slots" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://shadeslots.vercel.app" />
                <meta
                    property="og:description"
                    content="ShadeSlots is a NON-REAL money casino game, including blackjack, roulette, slots, and more!"
                />
                <meta property="og:site_name" content="ShadeSlots" />
                <meta name="msapplication-TileColor" content="#1e293b" />
                <meta name="theme-color" content="#1e293b" />
                <meta name="msapplication-TileImage" content="/favicon.png" />
                <link rel="apple-touch-icon" sizes="96x96" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            </Head>

            <body>
                <Main />

                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
