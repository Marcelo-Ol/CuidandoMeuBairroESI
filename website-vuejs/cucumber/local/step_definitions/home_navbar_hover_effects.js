const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
const assert = require("assert");

Given(
  "que estou na página inicial da navbar usando um mouse",
  async function () {
    await this.driver.get(this.baseUrl);
  }
);

When("coloco o mouse sobre o link {string}", async function (linkName) {
  let link;

  if (linkName !== "Entrar") {
    const linkMap = {
      "Sobre": "/sobre",
      "Aprenda +": "/glossario",
      "Análises": "/analises",
      "Blog": "http://blog.cuidando.vc",
    };
    link = await this.driver.wait(
      until.elementLocated(By.css(`a[href="${linkMap[linkName]}"]`)),
      5000
    );

    await this.driver.actions().move({ origin: link }).perform();
    await this.driver.sleep(1000);
  }
});

Then("o estilo do link {string} deve mudar", async function (linkName) {
  let link;

  if (linkName !== "Entrar") {
    const linkMap = {
      "Sobre": "/sobre",
      "Aprenda +": "/glossario",
      "Análises": "/analises",
      "Blog": "http://blog.cuidando.vc",
    };
    link = await this.driver.wait(
      until.elementLocated(By.css(`a[href="${linkMap[linkName]}"]`)),
      5000
    );

    const backgroundColor = await link.getCssValue("background-color");

    const expectedColor = "rgba(0, 102, 125, 0.8)";

    assert.strictEqual(
      backgroundColor,
      expectedColor,
      `Esperado: ${expectedColor}, mas obteve: ${backgroundColor}`
    );
  }
});
