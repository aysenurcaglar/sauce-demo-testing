const { $, browser } = require("@wdio/globals");

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

  async open() {
    await browser.url("/");
  }

  async enterUsername(username) {
    await this.inputUsername.setValue(username);
  }

  async enterPassword(password) {
    await this.inputPassword.setValue(password);
  }

  async clearUsername() {
    await this.inputUsername.click();
    // Select all text and delete it
    await browser.keys(["Control", "a"]);
    await browser.keys(["Delete"]);
    // Explicitly blur the field to trigger any validation
    await browser.keys(["Tab"]);
  }

  async clearPassword() {
    await this.inputPassword.click();
    await browser.keys(["Control", "a"]);
    await browser.keys(["Delete"]);
    await browser.keys(["Tab"]);
  }

  async clearAllFields() {
    await this.clearUsername();
    await this.clearPassword();
    await expect(this.inputUsername).toHaveValue("");
    await expect(this.inputPassword).toHaveValue("");
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async getErrorMessage() {
    const message = await this.errorMessage.getText();
    return message;
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}

module.exports = new LoginPage();
