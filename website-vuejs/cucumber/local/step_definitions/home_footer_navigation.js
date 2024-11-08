const { Given, When, Then } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");

Given("que estou na página inicial do rodapé", async function () {
  await this.driver.get(this.baseUrl);
});

When("clico no link {string} no rodapé", async function (linkName) {
  const linkMap = {
    "Termos de Uso": "/termos-de-uso",
    "Gitlab": "https://gitlab.com/cuidandodomeubairro",
  };

  const link = await this.driver.findElement(
    By.css(`a[href="${linkMap[linkName]}"]`)
  );
  await link.click();
});

Then(
  "sou direcionado para a URL do rodapé {string}",
  async function (expectedUrl) {
    await this.driver.wait(() => {
      return this.driver.getCurrentUrl().then((url) => {
        return url === expectedUrl;
      });
    }, 15000);

    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, expectedUrl);
  }
);
