// Page title
const title = "title";

// Content
const itemName = "inventory-item-name";
const subtotal = "subtotal-label";
const tax = "tax-label";
const total = "total-label";

// Actions
const finishBtn = "finish";
const cancelBtn = "cancel";

export const checkoutOverviewPage = {
  assertLoaded() {
    cy.url().should("include", "/checkout-step-two.html");
    cy.getByTest(title)
      .should("be.visible")
      .and("contain", "Checkout: Overview");
  },

  assertSummaryVisible() {
    cy.getByTest(itemName).should("have.length.at.least", 1);
    cy.getByTest(subtotal).should("be.visible");
    cy.getByTest(tax).should("be.visible");
    cy.getByTest(total).should("be.visible");
  },

  finish() {
    cy.getByTest(finishBtn)
      .should("be.visible")
      .click();
  },

  cancel() {
    cy.getByTest(cancelBtn)
      .should("be.visible")
      .click();
  },
};
