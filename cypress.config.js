const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gzswby',
   
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com/",
    retries: { "runMode": 1, "openMode": 1},
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
   
  },


});
