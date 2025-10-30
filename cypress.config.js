const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // подключаем cucumber preprocessor
      on("file:preprocessor", cucumber());

      // подключаем allure writer
      allureWriter(on, config);

      return config;
    },
    specPattern: "cypress/specs/*.feature"
  },
  env: {
    allure: true,
    allureResultsPath: "allure-results",
  },
});
