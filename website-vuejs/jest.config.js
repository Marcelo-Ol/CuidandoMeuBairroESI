module.exports = {
  testMatch: ["**/tests/caracterizacao/**/*.test.js"],
  moduleFileExtensions: ["js", "json", "vue"],
  testPathIgnorePatterns: ["/node_modules/", "/e2e/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    ".*\\.(vue)$": "vue-jest",
    ".*\\.(js)$": "babel-jest",
  },
  testEnvironment: "jsdom",
};
