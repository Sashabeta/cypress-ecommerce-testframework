import users from "../../fixtures/users.json";
import checkoutData from "../../fixtures/checkout.json";

import { inventoryPage } from "../../pages/inventoryPage";
import { cartPage } from "../../pages/cartPage";
import { checkoutPage } from "../../pages/checkoutPage";
import { checkoutOverviewPage } from "../../pages/checkoutOverviewPage";
import { checkoutCompletePage } from "../../pages/checkoutCompletePage";

describe("Checkout - Step One", () => {
  const { username, password } = users.standard;
  const itemName = "Sauce Labs Backpack";

  before(() => {
    cy.visit("/")
    cy.uiLogin(username, password);

    // Get to Checkout Step One
    inventoryPage.addItem(itemName);
    inventoryPage.openCart();
    cartPage.assertLoaded();
    cartPage.clickCheckoutBtn();

    // Verify we're on Checkout Step One page
    checkoutPage.assertLoaded();
  });

  it("continues to overview with valid customer info", () => {
    // Fill in customer information and continue
    checkoutPage.fillInfo(checkoutData.valid);
    checkoutPage.clickContinueBtn();

    // Verify checkout overview page and summary totals
    checkoutOverviewPage.assertLoaded();
    checkoutOverviewPage.assertSummaryVisible();

    // complete the purchase
    checkoutOverviewPage.finish();

    // verify successful order completion
    checkoutCompletePage.assertLoaded();
    checkoutCompletePage.assertSuccess();
  });
})