function SafariControl() {
    this.verify = (resolve, reject) => {
        const storage = window.sessionStorage;

        try {
            storage.setItem('testKey', 'test');
            storage.removeItem('testKey');

            resolve();
        } catch (e) {
            if (e.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {
                reject();
            }
        }
    };
}

SafariControl.isUsed = () => /constructor/i.test(window.HTMLElement)
        || (p => p.toString() === '[object SafariRemoteNotification]')(!window['safari'] || safari.pushNotification);

SafariControl.prototype = Object.create(BrowserControl.prototype);