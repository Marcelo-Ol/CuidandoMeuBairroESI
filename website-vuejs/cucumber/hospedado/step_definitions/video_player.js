const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
const assert = require("assert");

// Aumentando o tempo limite, visto que uma nova aba é aberta e demonstrou ser mais lenta
setDefaultTimeout(30000); // 30 segundos

Given('que estou na página do glossário', async function () {
  await this.driver.get("https://cuidando.vc/glossario");
});

When('clico no vídeo "Importância do orçamento"', async function (videoTitle) {

    // Localizando o elemento que contém o título do vídeo usando XPath
    const videoSelector = `/html/body/div/div/div[1]/div/div[2]/div/div[1]/a`;

    const videoElement = await this.driver.wait(until.elementLocated(By.xpath(videoSelector)), 15000);

    await videoElement.click();

    
});


Then('o vídeo é reproduzido', async function () {
    
    const iframeSelector = By.css('.ly-iframe');
    await this.driver.wait(until.elementLocated(iframeSelector), 15000);

    console.log('Verificando se o iframe está presente na página')
    const iframeElement = await this.driver.findElement(iframeSelector);
    assert.ok(iframeElement, "Iframe não encontrado na página.");

    await this.driver.switchTo().defaultContent();

});
