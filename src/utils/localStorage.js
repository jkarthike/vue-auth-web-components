function setStorage(key, value) {
    localStorage.setItem(key, value);
}

function removeStorage(key) {
    localStorage.removeItem(key);
}

function getStorage(key) {
    return localStorage.getItem(key);
}

export { setStorage, removeStorage, getStorage };
