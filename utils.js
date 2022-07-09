export const trimAll = str => str.replace(/\s+/g, " ").trim();

export const firstLetterToUppercase = str => str.charAt(0).toUpperCase() + str.slice(1);

export const scrollChatToBottom = () => {
    const messageBox = document.getElementById("messageBox");
    messageBox?.scroll(0, messageBox.scrollHeight);
};

export const decodeToken = async token => {
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/verifyToken`;

        const request = await fetch(url, {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ token }),
        });

        const response = await request.json();

        if (response.status === 200) return response.data;
    } catch (e) {}
};
