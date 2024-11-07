@login 
Feature: Realizar o login 

Scenario: Sucesso ao realizar o login 
Given que estou na página inicial
When eu acessar a tela de login clicando no botão entrar do navbar 
And preencher "teste123" na caixa de texto Nome de usuário
And preencher "12345" na caixa de texto Senha 
And eu clico no botão entrar da tela de login 
Then o usuário "teste123" deve ser autenticado com sucesso 