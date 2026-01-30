const selectors = {
  firstName: "firstName",
  lastName: "lastName",
  postalCode: "postalCode",
  continueBtn: "continue",
  error: "error",
};

export const checkoutPage = {
  assertLoaded() {
    cy.url().should("include", "/checkout-step-one.html");
  },

  fillInfo({ firstName, lastName, postalCode }) {
    cy.getByTest(selectors.firstName).clear().type(firstName);
    cy.getByTest(selectors.lastName).clear().type(lastName);
    cy.getByTest(selectors.postalCode).clear().type(postalCode);
  },

  clickContinueBtn() {
    cy.getByTest(selectors.continueBtn).click();
  },

  assertErrorContains(text) {
    cy.getByTest(selectors.error).should("be.visible").and("contain", text);
  },
};