@search_local
Feature: Mover mapa para coordenadas do endereço

  Scenario: Endereço válido encontrado
    
    Given que o usuário está na página inicial
    When o usuário pesquisa o endereço "Lapa" e clica no botão buscar
    Then o mapa deve ser movido para o endereço buscado

