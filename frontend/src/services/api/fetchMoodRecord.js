import Swal from 'sweetalert2';

export const getMoodRecordById = async (id) => {
  const response = await fetch(`http://localhost:3333/mood/${id}`);
  const data = await response.json();
  if (response.status !== 200) {
    Swal.fire({
      icon: 'error',
      title: 'API indisponível',
      text: 'Ocorreu um erro ao buscar os registros. Por favor, tente novamente mais tarde.',
    });
  } else {
    return data;
  }
};

export const getNextIdtoRecord = async () => {
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

export const postMoodRecord = async (moodRecord) => {
  try {
    const response = await fetch('http://localhost:3333/mood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moodRecord),
    });
    return response;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'API indisponível',
      text: 'Ocorreu um erro ao buscar os registros. Por favor, tente novamente mais tarde.',
    });
  }
};

export const deleteMoodRecord = async (id) => {
  try {
    const response = await fetch(`http://localhost:3333/mood/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'API indisponível',
      text: 'Ocorreu um erro ao buscar os registros. Por favor, tente novamente mais tarde.',
    });
  }
};

export const updateMoodRecord = async (id, moodRecord) => {
  try {
    const response = await fetch(`http://localhost:3333/mood/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moodRecord),
    });
    return response;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'API indisponível',
      text: 'Ocorreu um erro ao buscar os registros. Por favor, tente novamente mais tarde.',
    });
  }
}
