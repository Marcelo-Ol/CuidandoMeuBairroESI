@video_player
Feature: Testar funcionalidade do player de vídeo

  Scenario: Usuário clica no vídeo e o player de vídeo é exibido e reproduz
    Given que estou na página do glossário
    When clico no vídeo "Importância do orçamento"
    Then o vídeo é reproduzido
