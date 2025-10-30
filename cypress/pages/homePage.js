///<reference types="cypress" />
const ACCOUNT_SUMMARY_TAB = "#account_summary_tab";

class HomePage {
  static shouldSeeHomePage() {
    cy.get(ACCOUNT_SUMMARY_TAB).should("be.visible");
  }
}

export default HomePage;
