export const trimAll = str => str?.replace(/\s+/g, " ").trim();

export const firstCharToUppercase = str => str?.charAt(0).toUpperCase() + str?.slice(1);

export const statusCodes = {
    400: { error: "Bad Request", status: 400 },
    403: { error: "Invalid Email or Password!", status: 403 },
    404: { error: "Not Found", status: 404 },
    410: { error: "Gone", status: 410 },
    500: { error: "There was an unexpected error!", status: 500 },
};

export const millisToDate = millis => {
    if (!millis) return "";

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

        reader.onload = () => resolve(reader.result);
        reader.onerror = e => reject(e);
    });
