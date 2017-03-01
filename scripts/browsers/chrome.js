function ChromeControl() {
    this.verify =  (resolve, reject) => {
        const fs = window.RequestFileSystem || window.webkitRequestFileSystem;

        if (!fs) return;

        fs(window.TEMPORARY, 100, fs => resolve(), err => reject());
    };
}

ChromeControl.isUsed = () => !!window.chrome && !!window.chrome.webstore;

ChromeControl.prototype = Object.create(BrowserControl.prototype);