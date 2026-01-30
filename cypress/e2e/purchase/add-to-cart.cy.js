import users from "../../fixtures/users.json";
import { inventoryPage } from "../../pages/inventoryPage";
import { cartPage } from "../../pages/cartPage";
import { loginPage } from "../../pages/loginPage";


describe("add item to cart", () => {
  const itemName = "Sauce Labs Backpack";
  const { username, password } = users.standard;

  beforeEach(() => {
    cy.visit("/")
    cy.uiLogin(username, password);
  });

  it("adds a product to cart", () => {
    inventoryPage.addItem(itemName);
    inventoryPage.openCart();

    // Verify we're on the cart page
    cartPage.assertLoaded();
    cartPage.assertItem(itemName);
  });
});