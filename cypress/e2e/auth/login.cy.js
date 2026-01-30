import { loginPage } from "../../pages/loginPage";
import users from "../../fixtures/users.json";

describe("Login - Happy Path", () => {
  it("logs in with standard user", () => {
    const { username, password } = users.standard;
    loginPage.visit("/");
    loginPage.login(username, password);
    
    // Verify successful login
    loginPage.assertLoginSuccess();
  });
});
