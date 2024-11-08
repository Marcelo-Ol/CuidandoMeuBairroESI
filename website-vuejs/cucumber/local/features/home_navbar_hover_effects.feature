@navbar-hover-effects
Feature: Efeitos ao permanecer com o mouse em cima dos links de navegação

  Scenario: Verificar efeito hover nos links da navbar
    Given que estou na página inicial da navbar usando um mouse
    When coloco o mouse sobre o link "Sobre"
    Then o estilo do link "Sobre" deve mudar
    When coloco o mouse sobre o link "Aprenda +"
    Then o estilo do link "Aprenda +" deve mudar
    When coloco o mouse sobre o link "Análises"
    Then o estilo do link "Análises" deve mudar
    When coloco o mouse sobre o link "Blog"
    Then o estilo do link "Blog" deve mudar