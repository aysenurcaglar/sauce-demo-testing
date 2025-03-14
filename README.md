# Sauce Demo Testing Project

## Overview

This project contains automated end-to-end tests for the Sauce Demo website (https://www.saucedemo.com/) using WebdriverIO. The tests cover various login scenarios including valid credentials, missing password, and empty credential cases.

## Project Structure

```
sauce-demo-testing/
├── test/
│   ├── data/
│   │   └── login.data.js    # Test data for login scenarios
│   ├── pageobjects/
│   │   ├── login.page.js    # Page object for login page
│   │   └── inventory.page.js # Page object for inventory page
│   └── specs/
│       └── test.e2e.js      # Test specifications
├── wdio.conf.js             # WebdriverIO configuration
├── package.json
└── README.md
```

## Test Cases

The tests are organized into three use cases:

- **UC-1: Login with empty credentials**

  - Enter any username and password.
  - Clear both fields.
  - Click "Login".
  - Verify error message: `"Username is required"`.

- **UC-2: Login with missing password**

  - Enter a valid username.
  - Enter password.
  - Clear the password field.
  - Click "Login".
  - Verify error message: `"Password is required"`.

- **UC-3: Login with valid credentials**
  - Enter valid usernames.
  - Enter valid password.
  - Click "Login".
  - Verify the title: `"Swag Labs"`.

### **Implementation Details**

- **Test Automation Tool:** WebDriverIO
- **Browsers:** Chrome, Edge
- **Locators Used:** XPath
- **Patterns:** Page Object Model (POM)
- **Framework:** Mocha
- **Parallel Execution:** Enabled (`maxInstances: 2`)
- **Logging:** WDIO Spec Reporter
