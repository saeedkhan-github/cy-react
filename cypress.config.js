const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://localhost:19006/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
