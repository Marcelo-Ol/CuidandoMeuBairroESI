const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
const assert = require("assert");

setDefaultTimeout(30000); 

Given('que estou na página do glossário', async function () {
  await this.driver.get("https://cuidando.vc/glossario");
});

When('clico no vídeo "Importância do orçamento"', async function () {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const videoSelector = `/html/body/div/div/div[1]/div/div[2]/div/div[1]/a`;
  const videoElement = await this.driver.wait(until.elementLocated(By.xpath(videoSelector)), 30000);
  await videoElement.click();
});



Then('o vídeo é reproduzido', async function () {
    const iframeSelector = By.css('.ly-iframe');
    await new Promise(resolve => setTimeout(resolve, 3000));
    try {
        const iframeElement = await this.driver.wait(
            until.elementIsVisible(await this.driver.findElement(iframeSelector)), 
            30000 
        );

        console.log('Iframe is present and visible on the page');
        assert.ok(iframeElement, "Iframe not found or visible on the page.");
        
        await this.driver.switchTo().frame(iframeElement);

    } catch (error) {
        const pageSource = await this.driver.getPageSource();
        console.error("Iframe not found within timeout. Page HTML:", pageSource);
        throw error; 
    } finally {
        await this.driver.switchTo().defaultContent();
    }
});

