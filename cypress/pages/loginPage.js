///<reference types="cypress" />

const LOGIN_ERROR_MESSAGE_CONTENT = "Login and/or password are wrong";

const URL = "http://zero.webappsecurity.com/login.html";
const USERNAME_INPUT = "#user_login";
const PASSWORD_INPUT = "#user_password";
const SUBMIT_BUTTON = 'input[name="submit"]';
const ERROR_MESSAGE = ".alert-error";

class LoginPage {
  static visitLoginPage() {
    cy.visit(URL);
  }

  static fillUsername(name) {
    cy.get(USERNAME_INPUT).type(name);
  }

  static fillPassword(password) {
    cy.get(PASSWORD_INPUT).type(password);
  }

  static submitForm() {
    cy.get(SUBMIT_BUTTON).click();
  }

  static shouldShowErrorMessage() {
    cy.get(ERROR_MESSAGE).contains(LOGIN_ERROR_MESSAGE_CONTENT);
  }
}

export default LoginPage;
