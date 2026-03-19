# 🚀 Sprint – Consumo de API com JavaScript Assíncrono

## 📚 Descrição da Sprint

Este projeto foi desenvolvido para praticar **consumo de API** com **JavaScript assíncrono** em uma aplicação web.

A página busca dados da **Rick and Morty API**, processa o JSON retornado e renderiza os personagens dinamicamente em cards, sem recarregar a página.

Durante o desenvolvimento foram aplicados conceitos fundamentais de front-end moderno:

- Consumo de APIs REST
- Requisições HTTP com `fetch`
- Programação assíncrona com `async/await`
- Manipulação do DOM
- Tratamento de estados de interface (loading e erro)
- Renderização dinâmica de conteúdo

---

## 🎯 Objetivos de Aprendizagem

- Consumir dados de uma API pública usando JavaScript
- Aplicar `async/await` em fluxo real
- Validar resposta HTTP e tratar erros
- Manipular elementos da interface dinamicamente
- Estruturar o projeto com separação entre HTML, CSS e JS

---

## 🧰 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Rick and Morty API

---

## 🌐 API Utilizada

A aplicação consome dados do endpoint:

```txt
GET https://rickandmortyapi.com/api/character
```

### Dados exibidos por personagem

- Nome
- Imagem
- Status
- Espécie
- Última localização

---

## 📁 Estrutura do Projeto

```txt
activity-consume-api/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

---

## ⚙️ Funcionalidades

- ✅ Busca e carregamento de personagens da API
- ✅ Exibição de **loading** durante requisição
- ✅ Tratamento de falhas de resposta HTTP
- ✅ Exibição de mensagens de erro amigáveis
- ✅ Renderização de cards com dados dos personagens
- ✅ Indicador visual de status (`alive`, `dead`, `unknown`)
- ✅ Interface responsiva e estilizada

---

## 🔄 Fluxo da Aplicação

1. Ao carregar a página, o app dispara a função `fetchCharacters()`.
2. A interface mostra o estado de carregamento.
3. O app faz uma requisição `GET` para a API.
4. Se a resposta for válida, os personagens são processados.
5. Os cards são criados via JavaScript e inseridos no DOM.
6. Se houver erro, uma mensagem de falha é exibida na tela.

---

## ▶️ Como Executar o Projeto

1. Clone este repositório:

```bash
git clone <url-do-seu-repositorio>
```

2. Acesse a pasta do projeto.
3. Abra o arquivo `index.html` no navegador (ou com a extensão Live Server no VS Code).

---

## 🧠 Conceitos Praticados

- Requisições HTTP
- Fetch API
- `async/await`
- `try/catch` para tratamento de erros
- Manipulação e atualização do DOM
- Renderização dinâmica com Template Literals
- Responsividade com CSS

---

## 📌 Boas Práticas Aplicadas

- Organização por pastas (`css`, `js`)
- Separação de responsabilidades (estrutura, estilo e lógica)
- Nomes de variáveis claros
- Código comentado para facilitar manutenção
- Feedback visual para o usuário (loading e erro)

---