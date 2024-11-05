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

Then('o ano do seletor de ano deve ser o atual', async function () {
  // Obtendo a data atual 
  const currentYear = new Date().getFullYear().toString();

  // Selecionando o botão que contém o ano
  const yearSelector = await this.driver.findElement(By.css('button[data-dropdown-toggle="dropdownYear"]'));
  
  // Obtendo o texto do botão, que deve conter o ano atual
  const selectedYear = await yearSelector.getText();
  
  // Verificando se o ano exibido é o ano atual
  assert.strictEqual(
    selectedYear.trim(), 
    currentYear,
    `O ano exibido no seletor é ${selectedYear}, mas deveria ser ${currentYear}.`
  );
});
