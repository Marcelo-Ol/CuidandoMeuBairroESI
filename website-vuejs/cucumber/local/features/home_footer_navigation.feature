@footer
Feature: Navegar para outras interfaces a partir do rodapé na página inicial

  Scenario: Clicar em Termos de Uso no rodapé
    Given que estou na página inicial do rodapé
    When clico no link "Termos de Uso" no rodapé
    Then sou direcionado para a URL do rodapé "http://localhost:8080/termos-de-uso"

  Scenario: Clicar em GitLab no rodapé
    Given que estou na página inicial do rodapé
    When clico no link "Gitlab" no rodapé
    Then sou direcionado para a URL do rodapé "https://gitlab.com/cuidandodomeubairro"
