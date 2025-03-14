module.exports = {
  emptyCredentialsTest: {
    initialUsername: "test_user",
    initialPassword: "password123",
    expectedErrorMessage: "Username is required",
  },
  users: [
    "standard_user",
    "problem_user",
    "error_user",
    "visual_user",
    "performance_glitch_user",
  ],
  password: "secret_sauce",
  expectedTitle: "Swag Labs",
  expectedPasswordError: "Password is required",
};
