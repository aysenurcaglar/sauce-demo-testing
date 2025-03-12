const { $, browser } = require("@wdio/globals");
const logger = require("@wdio/logger").default("test");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $('//input[@id="user-name"]');
  }

  get inputPassword() {
    return $('//input[@id="password"]');
  }

  get loginButton() {
    return $('//input[@id="login-button"]');
  }

  get errorMessage() {
    return $('//h3[@data-test="error"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  async enterUsername(username) {
    await this.inputUsername.setValue(username);
    // await logger.info(`Entered username: ${username}`);
  }

  async enterPassword(password) {
    await this.inputPassword.setValue(password);
    // await logger.info("Entered password");
  }

  async clearUsername() {
    await this.inputUsername.click();
    // Select all text and delete it
    await browser.keys(["Control", "a"]);
    await browser.keys(["Delete"]);
    // Explicitly blur the field to trigger any validation
    await browser.keys(["Tab"]);
    // await logger.info("Cleared username field");
  }

  async clearPassword() {
    await this.inputPassword.click();
    // Select all text and delete it
    await browser.keys(["Control", "a"]);
    await browser.keys(["Delete"]);
    // Explicitly blur the field to trigger any validation
    await browser.keys(["Tab"]);
    // await logger.info("Cleared password field");
  }

  async clearAllFields() {
    await this.clearUsername();
    await this.clearPassword();
    // await logger.info("Cleared both fields");
    await expect(this.inputUsername).toHaveValue("");
    await expect(this.inputPassword).toHaveValue("");
  }

  async clickLogin() {
    await this.loginButton.click();
    // await logger.info("Clicked login button");
  }

  async getErrorMessage() {
    const message = await this.errorMessage.getText();
    // await logger.info(`Error message displayed: ${message}`);
    return message;
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  async open() {
    await browser.url("/");
    // await logger.info("Opened login page");
  }
}

module.exports = new LoginPage();
