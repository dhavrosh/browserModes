function EdgeControl() {
    this.verify = (resolve, reject) => {
        if(!window.indexedDB
            && (window.PointerEvent || window.MSPointerEvent)){
            reject();
        } else resolve();
    };
}

FirefoxControl.isUsed = () => !isIE && !!window.StyleMedia;

FirefoxControl.prototype = Object.create(BrowserControl.prototype);