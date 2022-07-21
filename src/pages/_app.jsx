import Head from "next/head";

import AuthState from "../context/AuthContext/AuthState";
import SidebarState from "../context/SidebarContext/SidebarState";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
    return (
        <AuthState>
            <SidebarState>
                <Head>
                    <title>Shade Slots</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>

                <Component {...pageProps} />
            </SidebarState>
        </AuthState>
    );
};

export default MyApp;
