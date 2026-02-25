const selectors = {
  title: '[data-test="title"]',
  itemName: '[data-test="inventory-item-name"]',
  checkoutBtn: '[data-test="checkout"]',
  removeBtn: (itemName) => `[data-test="remove-${itemName}"]`,
  cartList: '[data-test="cart-list"]',

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

  removeItem(itemName) {
    cy.get(`[data-test="remove-${itemName}"]`).click()
  },

  verifyItemRemoved(name) {
    cy.contains(selectors.itemName, name).should("not.exist");
  },

};