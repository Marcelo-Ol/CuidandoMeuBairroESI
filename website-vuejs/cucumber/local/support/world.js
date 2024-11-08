const { setWorldConstructor } = require("@cucumber/cucumber");
const { Builder } = require("selenium-webdriver");

class CustomWorld {
  constructor() {
    this.driver = new Builder().forBrowser("chrome").build();
    this.baseUrl = "http://localhost:8080";
  }

  async closeBrowser() {
    await this.driver.quit();
  }
}

setWorldConstructor(CustomWorld);
