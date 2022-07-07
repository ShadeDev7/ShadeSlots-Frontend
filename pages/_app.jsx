import ChatState from "../context/ChatContext/ChatState";
import AuthState from "../context/AuthContext/AuthState";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <AuthState>
            <ChatState>
                <Component {...pageProps} />
            </ChatState>
        </AuthState>
    );
}

export default MyApp;
