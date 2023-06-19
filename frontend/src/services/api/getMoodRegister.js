import Swal from 'sweetalert2';

export const getMoodRegister = async () => {
  try {
    const response = await fetch('http://localhost:3333/mood');
    const data = await response.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'API indisponível',
      text: 'Ocorreu um erro ao buscar os registros. Por favor, tente novamente mais tarde.',
    });
  }
};
