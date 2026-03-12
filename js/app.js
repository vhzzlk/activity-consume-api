/**
 * Sprint: Consumo de API
 * Objetivo: Consumir dados de uma API utilizando programação assíncrona
 * e exibir dinamicamente manipulando o DOM.
 */

// Constante para a URL da API (buscando a página 1 com múltiplos personagens)
const API_URL = 'https://rickandmortyapi.com/api/character';

// Captura de Elementos do DOM (Interface com usuário)
const statusContainer = document.getElementById('status-container');
const statusMessage = document.getElementById('status-message');
const loader = document.querySelector('.loader');
const charactersGrid = document.getElementById('characters-grid');

/**
 * Função assíncrona para buscar os dados da API.
 * Requisito: Utiliza programação assíncrona (async/await) com fetch.
 */
async function fetchCharacters() {
    try {
        // Exibe o estado visual de loading enquanto aguarda a API
        showLoading();

        // Faz a requisição HTTP tipo GET
        const response = await fetch(API_URL);

        // Tratamento de erro 1: Conexão bem-sucedida, mas resposta inválida (ex: 404, 500)
        if (!response.ok) {
            throw new Error(`Erro de resposta do servidor: Status ${response.status}`);
        }

        // Interpreta a resposta no formato JSON
        const data = await response.json();

        // Tratamento de erro 2: Ausência de dados (JSON vazio ou mal estruturado)
        if (!data.results || data.results.length === 0) {
            throw new Error('Nenhum dado encontrado na API.');
        }

        // Se o fluxo deu certo, chama a função para processar e renderizar os dados dinamicamente na página
        renderCharacters(data.results);

    } catch (error) {
        // Tratamento de erro 3 global (ex: falha de internet/conexão com a API e throws manuais acima)
        console.error('Falha ao processar e obter dados:', error);
        showError(`Ops! A API não respondeu conforme o esperado. Detalhes: ${error.message}`);
    }
}

/**
 * Função responsável por processar o array recebido do JavaScript (JS)
 *  e gerar/exibir dinamicamente cards criados e injetados de volta no HTML (DOM).
 * @param {Array} characters - Array de objetos carregado do JSON da API
 */
function renderCharacters(characters) {
    // Esconde o estado de carregamento e exibe o grid da tela principal
    statusContainer.classList.add('hidden');
    charactersGrid.classList.remove('hidden');

    // Limpa o contêiner por segurança, permitindo futuras requisições sem duplicação
    charactersGrid.innerHTML = '';

    // Utiliza um loop (forEach) para tratar cada individuo separadamente
    characters.forEach(character => {
        // Destruturação: Obtém apenas os dados que nos interessam de forma limpa
        const { name, image, status, species, location } = character;

        // Cria o elemento principal do card de forma programática 
        const card = document.createElement('article');
        card.classList.add('card');  // estilização prévia do CSS

        // Lógica simples para transformar o status recebido da API em uma classe CSS ("alive", "dead", "unknown")
        const statusClass = status.toLowerCase();

        // Preenche o conteúdo do nosso novo card, injetando as variáveis do array em strings (Template Literals)
        card.innerHTML = `
            <img src="${image}" alt="Foto de ${name}" class="card-img" loading="lazy">
            <div class="card-content">
                <h2 class="card-title">${name}</h2>
                <div class="card-info">
                    <div class="info-item">
                        <span class="status-indicator ${statusClass}"></span>
                        <span>${status} - ${species}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Última localização:</span>
                        <span>${location.name}</span>
                    </div>
                </div>
            </div>
        `;

        // Adiciona fisicamente o recém-criado componente em nosso container/tela HTML real
        charactersGrid.appendChild(card);
    });
}

/**
 * Funções auxiliares (Helpers) para exibição visual dos status exigidos como tratativa
 */
function showLoading() {
    statusContainer.classList.remove('hidden');
    charactersGrid.classList.add('hidden');
    loader.classList.remove('hidden'); // Exibe círculo girando (spinner)
    statusMessage.textContent = 'Abrindo portal (buscando dados)...';
    statusMessage.classList.remove('error-text');
}

/**
 * Exibe as mensagens na interface nos casos catalogados dentro do "catch".
 * @param {string} message - A string montada detalhando o erro específico ocorrido
 */
function showError(message) {
    statusContainer.classList.remove('hidden');
    charactersGrid.classList.add('hidden');
    
    // Esconde a bolinha giratória de loading e mantém apenas a mensagem de cor vermelha 
    loader.classList.add('hidden');
    statusMessage.textContent = message;
    statusMessage.classList.add('error-text'); // Aplica color-danger no texto
}

// Iniciar app de forma segura e responsiva: Assim que todo conteúdo e DOM renderizarem, dispara a requisição "Main"
document.addEventListener('DOMContentLoaded', fetchCharacters);
