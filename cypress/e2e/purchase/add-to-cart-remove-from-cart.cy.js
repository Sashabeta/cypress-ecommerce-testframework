import users from "../../fixtures/users.json";
import { inventoryPage } from "../../pages/inventoryPage";
import { cartPage } from "../../pages/cartPage";

const product = {
  name: 'Sauce Labs Backpack',
  slug: 'sauce-labs-backpack'
}

const { username, password } = users.standard;

beforeEach(() => {
  cy.visit("/")
  cy.uiLogin(username, password);
});

describe("add item to cart", () => {
  it("adds a product to cart", () => {
    inventoryPage.addItem(product.name);
    inventoryPage.openCart();

    // Verify we're on the cart page
    cartPage.assertLoaded();
    cartPage.assertItem(product.name);
  });
});

describe("remove item from cart", () => {
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