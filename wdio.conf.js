const {join} = require('path')
exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebacc-qe",
        "automationName": "UiAutomator2",
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
        "app": join(process.cwd(), './app/android/wcandroid-12.3-Signed.apk')
    }],

    waitForTimeout: 20000,
    mochaOpts:{
        timeout: 300000
    }
}