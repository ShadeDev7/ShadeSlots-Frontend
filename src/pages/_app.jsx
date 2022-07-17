import Head from "next/head";

import AuthState from "../context/AuthContext/AuthState";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
    return (
        <AuthState>
            <Head>
                <title>Shade Slots</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Component {...pageProps} />
        </AuthState>
    );
};

export default MyApp;
