import users from "../../fixtures/users.json";
import { inventoryPage } from "../../pages/inventoryPage";
import { loginPage } from "../../pages/loginPage";
import { menuPage, MENU_ITEMS } from "../../pages/menuPage";

const shoppingCartBadge = ".shopping_cart_badge";

describe("Menu navigation", () => {
  const { username, password } = users.standard;
  const itemName = "Sauce Labs Backpack";

  beforeEach(() => {
    cy.visit("/")
    cy.uiLogin(username, password);
  });

  const menuTests = [
    {
      name: "All Items",
      action: MENU_ITEMS.ALL_ITEMS,
      assert: () => inventoryPage.assertLoaded(),
    },
    {
      name: "About",
      assert: () => {
        cy.getByTest(MENU_ITEMS.ABOUT)
            .should("have.attr", "href")
            .and("include", "saucelabs.com");
  },
},
    {
      name: "Reset App State",
      setup: () => {
        inventoryPage.addItem(itemName);
        cy.get(shoppingCartBadge).should("be.visible");
      },
      action: MENU_ITEMS.RESET,
      assert: () =>
        cy.get(shoppingCartBadge).should("not.exist"),
    },
  ];

  menuTests.forEach(({ name, setup, action, assert }) => {
    it(`navigates via menu: ${name}`, () => {
        if (setup) setup();

        if (action) {
            menuPage.clickMenuItem(action);
        } else {
            menuPage.open(); // for About (no click)
        }

        assert();
    });
  });

  it("logs out successfully", () => {
    menuPage.clickMenuItem(MENU_ITEMS.LOGOUT);
    loginPage.verifyLogedOutState();

    /*
    Additional verification to ensure user is still logged out after page refresh. Currently redirecting to 404. 
    */
    //cy.visit("/inventory.html");
    //loginPage.verifyLogedOutState();
  });
});
