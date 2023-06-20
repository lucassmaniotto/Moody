import Swal from 'sweetalert2';

export const getMoodRecord = async () => {
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

export const getLastId = async () => {
  try {
    const response = await fetch('http://localhost:3333/mood/last-id');
    const data = await response.json();
    if (data.length === 0) return 1;
    return data[0].id + 1;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'API indisponível',
      text: 'Ocorreu um erro ao buscar os registros. Por favor, tente novamente mais tarde.',
    });
  }
};
