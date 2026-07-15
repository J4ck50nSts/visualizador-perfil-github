const BASE_URL = 'https://api.github.com';

export async function fetchUserProfile(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}`);

  if (!response.ok) {
    const error = new Error('Usuário não encontrado');
    error.code = 'NOT_FOUND';
    throw error;
  }

  return response.json();
}
