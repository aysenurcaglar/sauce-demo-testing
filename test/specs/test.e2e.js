const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const LoginData = require("../data/login.data");

describe("Sauce Demo Login Tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  // UC-1: Test Login form with empty credentials
  describe("UC-1: Login with empty credentials", () => {
    LoginData.emptyCredentialsTest.forEach(
      ({
        testName,
        initialUsername,
        initialPassword,
        expectedErrorMessage,
      }) => {
        it(testName, async () => {
          // Enter credentials first, then clear them
          await LoginPage.enterUsername(initialUsername);
          await LoginPage.enterPassword(initialPassword);
          await browser.pause(5000);

          // Clear both fields
          await LoginPage.clearAllFields();
          await browser.pause(5000);

          //wait for the inputfields to be empty.

          // Try to login
          await LoginPage.clickLogin();
          await browser.pause(5000);

          // Verify error message
          const errorMessage = await LoginPage.getErrorMessage();
          await expect(errorMessage).toContain(expectedErrorMessage);
          await browser.pause(5000);
        });
      }
    );
  });

  // UC-2: Test Login form with missing password
  describe("UC-2: Login with missing password", () => {
    LoginData.missingPasswordTest.forEach(
      ({ testName, username, expectedErrorMessage }) => {
        it(testName, async () => {
          // Enter only username
          await LoginPage.enterUsername(username);

          // Try to login without password
          await LoginPage.clickLogin();

          // Verify error message
          const errorMessage = await LoginPage.getErrorMessage();
          await expect(errorMessage).toContain(expectedErrorMessage);
        });
      }
    );
  });

  // UC-3: Test Login form with valid credentials
  describe("UC-3: Login with valid credentials", () => {
    LoginData.validCredentialsTest.forEach(
      ({ testName, username, password, expectedTitle }) => {
        it(testName, async () => {
          // Login with valid credentials
          await LoginPage.login(username, password);

          // Verify successful login
          // const isLoggedIn = await InventoryPage.isLoggedIn();
          // await expect(isLoggedIn).toBe(true);

          // Verify page title
          const title = await InventoryPage.getHeaderTitle();
          await expect(title).toBe(expectedTitle);
        });
      }
    );
  });
});
