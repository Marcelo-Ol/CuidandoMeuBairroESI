const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
const assert = require("assert");

// Aumentando o tempo limite, visto que uma nova aba é aberta e demonstrou ser mais lenta
setDefaultTimeout(30000); // 30 segundos

Given('que selecionei uma despesa no mapa', async function () {
  await this.driver.get("https://cuidando.vc/despesa/2022/2022.12.10.15.452.3022.44903900.90.39.0.9164");
});
  
When('clico no botão "Quero perguntar"', async function () {
    try{
        const button = await this.driver.findElement(By.xpath('//button[contains(text(), "Quero perguntar")]'));
    await button.click();
    }
    catch(e){
        await this.driver.sleep(100000);
    }
  });

  Then('um pop-up é exibido na tela', async function () {
    const popupSelector = By.css(".modal-content"); // Usamos a classe modal-content para localizar o pop-up
    await this.driver.wait(until.elementLocated(popupSelector), 10000); // Espera até que o pop-up seja localizado
  
    const popup = await this.driver.findElement(popupSelector);
    const isDisplayed = await popup.isDisplayed();
    assert.strictEqual(isDisplayed, true, "O pop-up não foi exibido.");
  });
