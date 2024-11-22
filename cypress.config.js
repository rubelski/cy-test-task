const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  responseTimeout: 30000,

  setupNodeEvents(on, config) {
    // implement node event listeners here
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
