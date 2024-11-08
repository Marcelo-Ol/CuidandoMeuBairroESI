const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
const assert = require("assert");

setDefaultTimeout(60000);

Given('que estou na página {string}', async function (url) {
    await this.driver.get(url);
});


When('eu selecionar o ano 2003 no seletor de ano', async function() {
    const button = await this.driver.findElement(
        By.css('button[data-dropdown-toggle="dropdownYear"]')
    );
    await button.click();

    const selectYear = await this.driver.findElement(By.css('#navbar > ul > li:nth-child(6) > div > div > ul > li:nth-child(1)'));
    await selectYear.click();
})


Then('o mapa deve mostrar os dados do ano de 2003', async function() {
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, 'https://cuidando.vc/2003', `A URL esperada era 'https://cuidando.vc/2003', mas a URL atual é ${currentUrl}`);
})