import users from "../../fixtures/users.json";
import { inventoryPage } from "../../pages/inventoryPage";
import { cartPage } from "../../pages/cartPage";
import { loginPage } from "../../pages/loginPage";

const product = {
  name: 'Sauce Labs Backpack',
  slug: 'sauce-labs-backpack'
}


describe("add item to cart", () => {
  const { username, password } = users.standard;

  beforeEach(() => {
    cy.visit("/")
    cy.uiLogin(username, password);
  });

  it("adds a product to cart", () => {
    inventoryPage.addItem(product.name);
    inventoryPage.openCart();

    // Verify we're on the cart page
    cartPage.assertLoaded();
    cartPage.assertItem(product.name);
  });

  it("remove a product from cart", () => {
    inventoryPage.addItem(product.name);
    inventoryPage.openCart();

    // Verify we're on the cart page
    cartPage.assertLoaded();
    cartPage.assertItem(product.name)
    cartPage.removeItem(product.slug)

    // Verify item is removed from cart
    cartPage.verifyItemRemoved(product.name)
  });
});