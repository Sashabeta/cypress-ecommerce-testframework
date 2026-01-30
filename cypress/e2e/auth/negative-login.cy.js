import { loginPage } from "../../pages/loginPage";
import users from "../../fixtures/users.json";

describe("Login - negative cases", () => {
  it("shows error for locked out user", () => {
    const { username, password } = users.locked;

    loginPage.visit("/");
    loginPage.login(username, password);
    loginPage.assertError("Sorry, this user has been locked out.");
  });

  it("shows error for invalid password", () => {
    const invalidPassword = "wrong_password";

    loginPage.visit("/");
    loginPage.login(users.standard.username, invalidPassword);
    loginPage.assertError("Username and password do not match");
  });

  it("shows error for empty credentials", () => {
    loginPage.visit("/");
    loginPage.clickLogin();
    loginPage.assertError("Username is required");
  });
});