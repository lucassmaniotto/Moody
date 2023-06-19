import Swal from 'sweetalert2';

export const getMoodOptions = async () => {
  try {
    const response = await fetch('http://localhost:3333/moods');
    const data = await response.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'API indisponível',
      text: 'Ocorreu um erro ao buscar as opções. Por favor, tente novamente mais tarde.',
    });
  }
};
