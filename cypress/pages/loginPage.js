const usernameInput = "username"
const passwordInput = "password"
const loginButton = "login-button"
const errorMessage = "error"

export const loginPage = {

  visit() {
    cy.visit("/");
  },  

  enterUsername(username) {
    cy.getByTest(usernameInput)
      .should("be.visible")
      .clear()
      .type(username);
  },

  enterPassword(password) {
    cy.getByTest(passwordInput)
      .should("be.visible")
      .clear()
      .type(password);
  },

  clickLogin() {
    cy.getByTest(loginButton)
      .should("be.visible")
      .click();
  },

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  },

   verifyLogedOutState() {
    // Verify URL is login page
    cy.url().should("include", "saucedemo.com");

    // Verify key login elements are visible
    cy.getByTest(usernameInput).should("be.visible");
    cy.getByTest(passwordInput).should("be.visible");
    cy.getByTest(loginButton).should("be.visible");
  },

  assertLoginSuccess() {
    cy.url().should("include", "/inventory");
    cy.get(".inventory_list").should("be.visible");
  },

  assertError(message) {
    cy.getByTest(errorMessage).should("be.visible").and("contain.text", message);
  },
};
