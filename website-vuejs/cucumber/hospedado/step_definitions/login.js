const { Given, When, Then, And } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
const assert = require("assert");


Given("que estou na página inicial", async function () {
    await this.driver.get(this.baseUrl); 
})

When("eu acessar a tela de login clicando no botão entrar do navbar", async function () {
    const btnEnter = await this.driver.findElement(By.css('#navbar > ul > li:nth-child(5) > a'));
    await btnEnter.click(); 
})

When('preencher {string} na caixa de texto Nome de usuário', async function (nickname) {
    const inputUser =  await this.driver.findElement(By.id('login-form-username'));
    await inputUser.sendKeys(nickname); 
})

When('preencher {string} na caixa de texto Senha', async function (password) {
    const inputPassword =  await this.driver.findElement(By.id('login-form-password'));
    await inputPassword.sendKeys(password); 
})

When('eu clico no botão entrar da tela de login', async function () {
    const btnEnter = await this.driver.findElement(By.css('#modal-dialog > div > div:nth-child(2) > div > form > button'));
    await btnEnter.click(); 
})

Then('o usuário {string} deve ser autenticado com sucesso' ,async function (userTest) {

     const loggedUser = await this.driver.wait(
        until.elementLocated(By.css('#navbar > ul > li:nth-child(5) > button')),
        5000 
    );

    const user = await loggedUser.getText();
    
    assert.strictEqual(user, userTest, `Falha ao realizar o login: esperado ${userTest}, obtido ${user}`);
})