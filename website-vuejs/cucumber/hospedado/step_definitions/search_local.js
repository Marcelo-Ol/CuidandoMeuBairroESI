const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
const assert = require("assert");

Given("que o usuário está na página inicial", async function () {
  // Navega até a página inicial 
  await this.driver.get(this.baseUrl); 
});

When('o usuário pesquisa o endereço {string} e clica no botão buscar', async function (address) {
 
  const searchInput = await this.driver.findElement(By.id('search-address-input')); 
  await this.driver.wait(until.elementIsVisible(searchInput), 10000); 
  await searchInput.sendKeys(address); 

  const searchButton = await this.driver.findElement(By.css('#app > div > div.c-map.expanded-map > div.map__card-content.container.mx-auto > div > div.bg-white.lg\\:pb-10.lg\\:p-10.pt-10.pb-3.mb-5.lg\\:rounded-lg.lg\\:shadow-lg > div:nth-child(2) > div.c-map__year-submit.grid.grid-cols-2.gap-4.h-8 > div:nth-child(2) > button'));
  await this.driver.wait(until.elementIsEnabled(searchButton), 10000); 
  await searchButton.click();
});

Then('o mapa deve ser movido para o endereço buscado', async function () {
  
  await this.driver.wait(until.elementLocated(By.css('#map-container > div.leaflet-pane.leaflet-map-pane > div.leaflet-proxy.leaflet-zoom-animated')), 60000); 

  // Pegue o valor do atributo 'style' do elemento com o seletor especificado
  const scaleElement = await this.driver.findElement(By.css('#map-container > div.leaflet-pane.leaflet-map-pane > div.leaflet-proxy.leaflet-zoom-animated'));
  const style = await scaleElement.getAttribute('style'); // Pega o valor do estilo do elemento

  // Verifica se a string de estilo contém a transformação com o 'scale'
  const scaleMatch = style.match(/scale\((\d+)\)/); // Expressão regular para capturar o valor de scale
  
  const scale = scaleMatch[1]; // O valor do scale estará no primeiro grupo de captura
  // Para depuração
  assert.strictEqual(scale, '32768', `O zoom esperado era 32768, mas foi ${scale}`);
});
