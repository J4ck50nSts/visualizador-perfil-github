import { fetchUserProfile } from './api.js';
import { renderEmptyState, renderLoading, renderProfile } from './ui.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

async function handleSearch() {
  const userName = inputSearch.value.trim();

  if (!userName) {
    alert('Por favor, digite um nome de usuário do GitHub.');
    renderEmptyState(profileResults);
    return;
  }

  renderLoading(profileResults);

  try {
    const userData = await fetchUserProfile(userName);
    renderProfile(profileResults, userData);
  } catch (error) {
    console.error('Erro ao buscar o perfil do usuário:', error);

    if (error.code === 'NOT_FOUND') {
      alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
    } else {
      alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
    }

    renderEmptyState(profileResults);
  }
}

btnSearch.addEventListener('click', handleSearch);

inputSearch.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleSearch();
  }
});