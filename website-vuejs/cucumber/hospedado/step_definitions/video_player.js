const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
const assert = require("assert");

// Aumentando o tempo limite, visto que uma nova aba é aberta e demonstrou ser mais lenta
setDefaultTimeout(30000); // 30 segundos

Given('que estou na página do glossário', async function () {
  await this.driver.get("https://cuidando.vc/glossario");
});

When('clico no vídeo "Importância do orçamento"', async function () {
  // Localizando o elemento que contém o título do vídeo usando XPath
  const videoSelector = `/html/body/div/div/div[1]/div/div[2]/div/div[1]/a`;
  const videoElement = await this.driver.wait(until.elementLocated(By.xpath(videoSelector)), 30000);
  await videoElement.click();
});



Then('o vídeo é reproduzido', async function () {
  const iframeSelector = By.css('.ly-iframe');
  
  try {
      // Wait for the iframe element to be located and visible
      const iframeElement = await this.driver.wait(
          until.elementIsVisible(await this.driver.findElement(iframeSelector)), 
          30000 // Increased timeout to 30 seconds
      );

      console.log('Iframe is present and visible on the page');
      assert.ok(iframeElement, "Iframe not found or visible on the page.");
      
      // Switch to iframe if necessary
      await this.driver.switchTo().frame(iframeElement);

  } catch (error) {
      // Capture the page source for debugging if iframe isn't found
      const pageSource = await this.driver.getPageSource();
      console.error("Iframe not found within timeout. Page HTML:", pageSource);
      throw error; // rethrow to allow test to fail properly
  } finally {
      await this.driver.switchTo().defaultContent();
  }
});

