function BrowserControl() {}

BrowserControl.prototype.isUsed = () => {
    throw new Error('isUsed() must be implemented');
};

BrowserControl.prototype.verify = () => {
    throw new Error('verify() must be implemented');
};

