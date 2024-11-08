# Projeto Cuidando do Meu Bairro

[![Code Climate - Maintainability](https://api.codeclimate.com/v1/badges/cf0f9b5b94b02433b155/maintainability)](https://codeclimate.com/github/Marcelo-Ol/CuidandoMeuBairroESI/maintainability)
[![Github Actions - CI Workflow](https://github.com/Marcelo-Ol/CuidandoMeuBairroESI/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/Marcelo-Ol/CuidandoMeuBairroESI/actions/workflows/ci.yml)

## Descrição

Projeto acadêmico referente a disciplina de Engenharia de Sistemas de Informação I - 2024.

## Integrantes do Projeto
- João Victor Andrade Lucio
- Leonardo Conde Aoun
- Marcelo Silvestre Leal Oliveira
- Matheus Ferreira Germano
- Victor Queiroga de Carvalho
- Willian Silva Nascimento de Jesus

## Pré-requisitos

Antes de começar, certifique-se de que você possui as seguintes ferramentas instaladas:

- **Node.js**
- **NVM (Node Version Manager)**
- **Python**

> **Observação:** Todos os comandos abaixo assumem que você está executando-os a partir da pasta raiz do projeto.

## Instalação

- Configuração do ambiente e instalação das dependências do projeto.

   ```bash
     cd website-vuejs
  ``` 
  ```bash
    nvm install 14  
    nvm use 14
  ```
  ```bash
    npm install
  ```

## Executar o Servidor Local

- Comandos para iniciar o servidor local e rodar a aplicação.

   ```bash
   cd website-vuejs
   npm run serve
  ``` 

## Testes de Aceitação

- Configuração e execução dos testes de aceitação com Cucumber, exigindo Node.js versão 18+.
  
   ```bash
    nvm install 20
    nvm use 20
  ``` 

### Testes de Aceitação do Site Hospedado

- Execução dos testes na versão hospedada do site.
  
   ```bash
    cd website-vuejs/cucumber/hospedado
    npx cucumber-js
  ``` 

### Testes de Aceitação Local

- Execução dos testes na versão local do site.
  
   ```bash
    cd website-vuejs/cucumber/local
    npx cucumber-js
  ``` 

## Testes de Caracterização

- Execução dos testes de caracterização com Jest.

   ```bash
    cd website-vuejs
    npm run jest
  ``` 
