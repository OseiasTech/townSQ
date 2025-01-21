const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
   },
    specPattern: 'cypress/e2e//*.feature',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
  },
  component: {
    specPattern: 'cypress/component//*.spec.js',
    supportFile: 'cypress/support/component.{js,jsx,ts,tsx}', 
  },
  viewportHeight: 1000,
  viewportWidth: 1800,
  'cypressHelper.cucumberTagsAutocomplete': {
    enable: true,
    tags: ['focus', 'someOtherTag'],
  },
});