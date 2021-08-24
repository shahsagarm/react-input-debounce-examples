export const showLoader = () => {
    const overlayElem = document.getElementById('overlay');
    if (overlayElem) {
        overlayElem.style.display = 'block';
    }
};

export const hideLoader = () => {
    const overlayElem = document.getElementById('overlay');
    if (overlayElem) {
        const timeoutId = setTimeout(() => {
            overlayElem.style.display = 'none';
            clearTimeout(timeoutId);
        });
    }
};