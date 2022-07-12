export const trimAll = str => str.replace(/\s+/g, " ").trim();

export const firstLetterToUppercase = str => str.charAt(0).toUpperCase() + str.slice(1);

export const scrollChatToBottom = () => {
    const messageBox = document.getElementById("messageBox");
    messageBox?.scroll(0, messageBox.scrollHeight);
};

export const decodeAuthToken = async token => {
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/decodeToken`;

        const request = await fetch(url, {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ token }),
        });

        const response = await request.json();

        if (response.status === 200) return response.data;
    } catch (e) {}
};

export const millisToDate = millis => {
    const date = new Date(millis);
    const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return formatter.format(date);
};

export const fileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = e => reject(e);
    });
