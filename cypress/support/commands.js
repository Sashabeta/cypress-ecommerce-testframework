
import { loginPage } from "../pages/loginPage";
import { inventoryPage } from "../pages/inventoryPage";

Cypress.Commands.add("uiLogin", (username, password) => {
    loginPage.login(username, password);
    inventoryPage.assertLoaded();
});

Cypress.Commands.add("getByTest", (id) => {
  cy.get(`[data-test="${id}"]`);
});