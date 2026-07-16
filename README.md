# Visualizador de Perfil do GitHub

Este projeto é uma aplicação web simples em JavaScript que permite buscar um usuário do GitHub e exibir informações públicas do perfil, como nome, avatar, bio, seguidores, seguindo e repositórios.

## Funcionalidades

- Busca por nome de usuário do GitHub
- Exibição do avatar, nome e bio do perfil
- Mostrar contadores de seguidores e pessoas seguidas
- Listagem dos repositórios com informações como estrelas, forks, watchers e linguagem
- Feedback visual de carregamento e erros ao buscar dados

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- API REST do GitHub

## Estrutura do projeto

- index.html: estrutura principal da interface
- src/css/: arquivos de estilização
- src/js/: lógica da aplicação
  - githubApi.js: consumo da API do GitHub
  - profileView.js: renderização dos dados na tela
  - index.js: controle da interação com o formulário

## Como executar

1. Clone este repositório para sua máquina.
2. Abra o arquivo index.html em seu navegador.
3. Digite o nome de um usuário do GitHub no campo de busca e clique em Buscar.

> Se preferir, você também pode abrir o projeto com a extensão Live Server do VS Code para uma experiência mais prática.

## Exemplo de uso

Digite um nome como:

- octocat
- torvalds
- gaearon

E veja os dados públicos do perfil diretamente na página.
