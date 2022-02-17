const noble = require('@abandonware/noble');

noble.on('stateChange', async (state) => {
    if (state === 'poweredOn') {
        noble.startScanning([], true, (error) => {
            if (error) {
                console.log("Cannot start bluetooth scan. " + error);
                noble.stopScanning();
            } else {
                console.log("Bluetooth scan started.");
            }
        });
    }
});

noble.on('discover', (peripheral) => {
    console.log("[" + peripheral.address + "] name=" + peripheral.advertisement.localName);
    if (peripheral.advertisement.localName == "0ubi") {
        peripheral.connect(function (error) {
            console.log('connected to peripheral: ' + peripheral.localName);
        });
    }
});
