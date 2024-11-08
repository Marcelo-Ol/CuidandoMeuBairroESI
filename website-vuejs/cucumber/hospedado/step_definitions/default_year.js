const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
const assert = require("assert");

// Aumentando o tempo limite para garantir que a página carregue completamente
setDefaultTimeout(30000); // 30 segundos

Given('que estou na página inicial do site {string}', async function (url) {
  await this.driver.get(url);
});

When('a página carrega completamente', async function () {
  await this.driver.wait(until.elementLocated(By.css('button[data-dropdown-toggle="dropdownYear"]')), 15000);
});

Then('o ano do seletor de ano deve ser diferente do ano atual', async function () {
  
  const currentYear = new Date().getFullYear().toString();

  const yearSelector = await this.driver.findElement(By.css('button[data-dropdown-toggle="dropdownYear"]'));
  
  const selectedYear = await yearSelector.getText();
  
  assert.notStrictEqual(
    selectedYear.trim(),
    currentYear,
    `O ano exibido no seletor é ${selectedYear}, mas deveria ser diferente de ${currentYear}.`
  );
});
