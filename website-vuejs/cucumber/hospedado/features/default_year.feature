@default_year
Feature: Exibir ano atual

  Esta feature assegura que o seletor de ano na página inicial
  seja automaticamente ajustado para o ano atual, garantindo que os
  usuários visualizem informações atualizadas ao entrar no site.

  Scenario: Ao carregar a página o seletor de ano deve exibir o ano atual
    Given que estou na página inicial do site "https://cuidando.vc/"
    When a página carrega completamente
    Then o ano do seletor de ano deve ser o atual

# obs: teste falhando 