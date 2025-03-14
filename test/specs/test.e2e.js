const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const LoginData = require("../data/login.data");

describe("Sauce Demo Login Tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  const { users, password, expectedPasswordError, expectedTitle } = LoginData;

  describe("UC-1: Login with empty credentials", () => {
    it("should show error when credentials are cleared before login", async () => {
      const { initialUsername, initialPassword, expectedErrorMessage } =
        LoginData.emptyCredentialsTest;

      await LoginPage.enterUsername(initialUsername);
      await LoginPage.enterPassword(initialPassword);

      await LoginPage.clearAllFields();

      await LoginPage.clickLogin();

      const errorMessage = await LoginPage.getErrorMessage();
      await expect(errorMessage).toContain(expectedErrorMessage);
    });
  });

  describe("UC-2: Login with missing password", () => {
    it("should show error when attempting login with missing password", async () => {
      await LoginPage.enterUsername(users[0]);
      await LoginPage.enterPassword(password);

      await LoginPage.clearPassword();

      await LoginPage.clickLogin();

      const errorMessage = await LoginPage.getErrorMessage();
      await expect(errorMessage).toContain(expectedPasswordError);
    });
  });

  describe("UC-3: Login with valid credentials", () => {
    users.forEach((username) => {
      it(`should login successfully with ${username}`, async () => {
        await LoginPage.login(username, password);

        const title = await InventoryPage.getHeaderTitle();
        await expect(title).toBe(expectedTitle);
      });
    });
  });
});
