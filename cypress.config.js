const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    retries: process.env.CI ? { runMode: 2, openMode: 0 } : { runMode: 1, openMode: 0 },
    defaultCommandTimeout: process.env.CI ? 10000 : 4000,
    pageLoadTimeout: process.env.CI ? 120000 : 60000,
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    retries: { runMode: 1, openMode: 0 },
  },
});