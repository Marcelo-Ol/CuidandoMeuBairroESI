@default_year
Feature: Exibir ano atual

  Scenario: Ao carregar a página o seletor de ano deve exibir o ano atual
    Given que estou na página inicial do site "https://cuidando.vc/"
    When a página carrega completamente
    Then o ano do seletor de ano deve ser diferente do ano atual
