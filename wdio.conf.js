const path = require('path');

exports.config = {

    runner: 'local',

    specs: [
        './features/**/*.feature'
    ],

    exclude: [],

    maxInstances: 1,

    protocol: 'http',
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    services: [],

    capabilities: [
        {
            platformName: 'Android',

            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Android Emulator',
            'appium:udid': 'emulator-5554',

            'appium:appPackage': 'com.urbanindo.android',
            'appium:appActivity': 'app.nine_nine.MainActivity',

            'appium:noReset': true,
            'appium:newCommandTimeout': 120
        }
    ],

    framework: 'cucumber',

    
    cucumberOpts: {
        require: [
            path.resolve(
                __dirname,
                './features/step_definitions/homepage.steps.js'
            )
        ],

        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: true,
        timeout: 60000
    },

    reporters: ['spec'],

    logLevel: 'info',

    waitforTimeout: 15000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    before: async function () {
        console.log('Starting 99.co homepage automation...');
    },

    after: async function () {
        console.log('99.co homepage automation finished.');
    }
};