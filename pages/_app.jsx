import ChatState from "../context/ChatContext/ChatState";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <ChatState>
            <Component {...pageProps} />
        </ChatState>
    );
}

export default MyApp;
