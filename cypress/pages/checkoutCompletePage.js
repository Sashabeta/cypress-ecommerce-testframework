const title = "title";
const completeHeader = "complete-header";
const completeText = "complete-text";
const backHomeBtn = "back-to-products";

export const checkoutCompletePage = {
  assertLoaded() {
    cy.url().should("include", "/checkout-complete.html");
    cy.getByTest(title).should("be.visible").and("contain", "Checkout: Complete");
  },

  assertSuccess() {
    cy.getByTest(completeHeader)
      .should("be.visible")
      .and("contain", "Thank you for your order!");
  },

  assertSuccessMessageContains(text) {
    cy.get(completeText)
      .should("be.visible")
      .and("contain", text);
  },

  backHome() {
    cy.getByTest(backHomeBtn)
      .should("be.visible")
      .click();

    // Verify we're back on the inventory page
    cy.url().should("include", "/inventory.html");
  }
};
