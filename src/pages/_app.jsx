import Head from "next/head";

import AuthState from "../context/AuthContext/AuthState";
import ChatState from "../context/ChatContext/ChatState";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
    return (
        <AuthState>
            <ChatState>
                <Head>
                    <title>Shade Slots</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>

                <Component {...pageProps} />
            </ChatState>
        </AuthState>
    );
};

export default MyApp;
