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

1. **UC-1: Login with empty credentials**
   - Tests error handling when both username and password fields are empty

2. **UC-2: Login with missing password**
   - Tests error handling when attempting to login with username but no password

3. **UC-3: Login with valid credentials**
   - Tests successful login with various usernames:
     - `standard_user`
     - `problem_user`
     - `performance_glitch_user`
     - `error_user`
     - `visual_user`

## Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm (version 8 or higher)

### Installation
1. Clone the repository
   ```
   git clone https://github.com/aysenurcaglar/sauce-demo-testing.git
   cd sauce-demo-testing
   ```

2. Install dependencies
   ```
   npm install
   ```

## Running Tests
To run all tests:
```
npm test
```

## Browser Support
The project is configured to run tests on:
- Google Chrome
- Microsoft Edge
