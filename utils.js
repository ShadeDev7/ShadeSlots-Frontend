export const trimAll = str => str.replace(/\s+/g, " ").trim();

export const firstLetterToUppercase = str => str.charAt(0).toUpperCase() + str.slice(1);

export const scrollChatToBottom = () => {
    const messageBox = document.getElementById("messageBox");
    messageBox?.scroll(0, messageBox.scrollHeight);
};
