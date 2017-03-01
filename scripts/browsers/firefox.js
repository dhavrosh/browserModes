function FirefoxControl() {
    this.verify = (resolve, reject) => {
        const db = window.indexedDB.open('test');

        db.onerror = () => reject();
        db.onsuccess = () => resolve();
    };
}

FirefoxControl.isUsed = () => typeof window.InstallTrigger !== 'undefined';

FirefoxControl.prototype = Object.create(BrowserControl.prototype);