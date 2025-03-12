module.exports = {
  // UC-1: Test with empty credentials
  emptyCredentialsTest: [
    {
      testName: "Empty credentials after clearing both fields",
      initialUsername: "test_user",
      initialPassword: "password123",
      expectedErrorMessage: "Username is required",
    },
  ],

  // UC-2: Test with missing password
  missingPasswordTest: [
    {
      testName: "Missing password with standard_user",
      username: "standard_user",
      expectedErrorMessage: "Password is required",
    },
    {
      testName: "Missing password with problem_user",
      username: "problem_user",
      expectedErrorMessage: "Password is required",
    },
  ],

  // UC-3: Test with valid credentials
  validCredentialsTest: [
    {
      testName: "Valid login with standard_user",
      username: "standard_user",
      password: "secret_sauce",
      expectedTitle: "Swag Labs",
    },
    {
      testName: "Valid login with problem_user",
      username: "problem_user",
      password: "secret_sauce",
      expectedTitle: "Swag Labs",
    },
    {
      testName: "Valid login with performance_glitch_user",
      username: "performance_glitch_user",
      password: "secret_sauce",
      expectedTitle: "Swag Labs",
    },
  ],
};
