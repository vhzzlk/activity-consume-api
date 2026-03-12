# Rick and Morty | Multiverso API 🟢

Este projeto foi desenvolvido como parte de uma Sprint de Consumo de API. A aplicação consome a API pública do Rick and Morty para exibir personagens de forma dinâmica, moderna e responsiva.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica.
- **CSS3**: Estilização premium com Grid, Flexbox e efeitos de Glassmorphism.
- **JavaScript (ES6+)**: Consumo de API com `fetch` e `async/await`.
- **API**: [Rick and Morty API](https://rickandmortyapi.com/)

## 📋 Requisitos Atendidos

- [x] **Estrutura do Projeto**: Organizada em pastas (`css/`, `js/`).
- [x] **Consumo de API**: Implementado com requisições assíncronas.
- [x] **Exibição Dinâmica**: Dados renderizados em cards interativos.
- [x] **Tratamento de Erros**: Mensagens informativas para falhas de conexão ou dados ausentes.
- [x] **Responsividade**: Layout adaptável para dispositivos móveis e desktop.
- [x] **Código Comentado**: Lógica documentada para fácil compreensão.

## 🛠️ Como Funciona

1. Ao carregar a página, o evento `DOMContentLoaded` dispara a função `fetchCharacters`.
2. Um `loader` é exibido enquanto os dados são buscados.
3. Se a busca for bem-sucedida, os cards são gerados dinamicamente no DOM.
4. Caso ocorra algum erro (offline, 404, etc.), um bloco de captura (`try...catch`) trata a exceção e exibe uma mensagem amigável ao usuário.

## 📸 Demonstração

Para validar o funcionamento, você pode:

1. Abrir o arquivo `index.html` no navegador.
2. Verificar a grade de personagens carregada.
3. Testar o erro: Desabilite sua internet ou use o modo "Offline" no DevTools do navegador e atualize a página.

---

Desenvolvido com foco em alta fidelidade visual e boas práticas de código.
