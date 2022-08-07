// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

export const getWebAuthnId = (address) => {
    if (address.keyId) return address.keyId;
    if (address.credID) return address.credID;
};

/**
 * Truncates the middle of a string.
 * @param str - The string to truncate
 * @param n - The number of characters to preserver
 * @returns
 */
export const truncateMid = (str: string, n = 3) => {
    return `${str.slice(0, n)}...${str.slice(-n)}`;
};

export const blobToDataURL = (blob: Blob): Promise<string | ArrayBuffer> => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            resolve(e.target.result);
        };
        fileReader.onerror = reject;
        fileReader.readAsDataURL(blob);
    });
};
