function BrowserSet() {
    this.controls = [
        ChromeControl,
        FirefoxControl,
        SafariControl,
        EdgeControl
    ]
}

BrowserSet.prototype.verify = function (resolve, reject) {
    const constructor = this.controls.find(control => control.isUsed() === true);
    const control = new constructor();

    control.verify(resolve, reject);
};