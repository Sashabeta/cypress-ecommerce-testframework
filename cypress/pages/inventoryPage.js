const inventoryList = '.inventory_list'
const cartLink = "shopping-cart-link"

export const inventoryPage = {
  assertLoaded() {
    cy.get(inventoryList).should("be.visible");
  },

 addItem(itemName) {
  cy.contains('[data-test="inventory-item-name"]', itemName)
    .should("be.visible")
    .closest('[data-test="inventory-item"]')
    .within(() => {
      cy.contains("button", "Add to cart").click();
    });
},

  openCart() {
    cy.getByTest(cartLink)
      .should("be.visible")
      .click();
  },
};
