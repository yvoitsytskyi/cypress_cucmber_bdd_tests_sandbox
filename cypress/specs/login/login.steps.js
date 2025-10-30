///<reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../pages/loginPage";
import HomePage from "../../pages/homePage";

let userData;

before(() => {
  cy.fixture("user").then((data) => {
    userData = data;
  });
});

Given("I open login page", () => {
  LoginPage.visitLoginPage();
});

When("I fill username with {string} name", (role) => {
  let user = userData[role];
  LoginPage.fillUsername(user.name);
});

When("I feel password with {string} password", (role) => {
  let user = userData[role];
  LoginPage.fillPassword(user.password);
});

When("I click on submit login", () => {
  LoginPage.submitForm();
});

Then("I should see homepage", () => {
  HomePage.shouldSeeHomePage();
});

Then("I should see error message", () => {
  LoginPage.shouldShowErrorMessage();
});
