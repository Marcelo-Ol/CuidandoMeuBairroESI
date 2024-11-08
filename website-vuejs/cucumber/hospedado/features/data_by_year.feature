@data_by_year

Feature: Filtrar dados por ano 

Scenario: exibir no mapa os dados do ano selecionado 

Given que estou na página "https://cuidando.vc/2022/1"
When eu selecionar o ano 2003 no seletor de ano 
Then o mapa deve mostrar os dados do ano de 2003