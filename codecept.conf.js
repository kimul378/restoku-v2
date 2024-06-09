/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.test.js',
  output: 'e2e/output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:9000',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'RESTOKU V2 FIX',
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
}