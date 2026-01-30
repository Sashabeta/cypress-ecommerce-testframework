const selectors = {
  title: '[data-test="title"]',
  itemName: '[data-test="inventory-item-name"]',
  checkoutBtn: '[data-test="checkout"]',
};

export const cartPage = {
  assertLoaded() {
    cy.url().should("include", "/cart");
    cy.get(selectors.title).should("contain", "Your Cart");
  },

  assertItem(name) {
    cy.get(selectors.itemName).should("contain", name);
  },

  clickCheckoutBtn() {
    cy.get(selectors.checkoutBtn)
      .should("be.visible")
      .click();
  },
};