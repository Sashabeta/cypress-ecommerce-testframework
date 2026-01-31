const menuBtn = "#react-burger-menu-btn";
const menuPanel = ".bm-menu";

export const MENU_ITEMS = {
  ALL_ITEMS: "inventory-sidebar-link",
  ABOUT: "about-sidebar-link",
  LOGOUT: "logout-sidebar-link",
  RESET: "reset-sidebar-link",
};

export const menuPage = {
  open() {
    cy.get(menuBtn).should("be.visible").click();
    cy.get(menuPanel).should("be.visible");
  },

  clickMenuItem(selector) {
    this.open();
    cy.getByTest(selector).should("be.visible").click();
  },
};
