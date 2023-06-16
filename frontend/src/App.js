import React, { useCallback, useEffect, useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';

export const App = () => {
  const [moods, setMoods] = useState([]);

  const handleEdit = () => {
    Swal.fire({
      title: 'Editar',
      html:
        '<select id="mood" class="swal2-select">' +
        '  <option value="feliz">Feliz</option>' +
        '  <option value="triste">Triste</option>' +
        '  <option value="empolgado">Empolgado</option>' +
        '  <option value="calmo">Calmo</option>' +
        '</select>' +
        '<textarea id="textarea" class="swal2-textarea"></textarea>',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Salvar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const textareaValue = Swal.getPopup().querySelector('#textarea').value;
        const moodValue = Swal.getPopup().querySelector('#mood').value;
        console.log('Texto:', textareaValue);
        console.log('Humor selecionado:', moodValue);
      },
    });
  };

  const fetchMoods = async () => {
    try {
      const response = await fetch('http://localhost:333/mood');
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

  const populateTable = useCallback(async () => {
    const moods = await fetchMoods();
    setMoods(moods);
    console.log(moods);
  }, []);

  const setEmojiByHumorAcronym = (acronym) => {
    switch (acronym) {
      case 'AN':
        return '😡';
      case 'CA':
        return '😌';
      case 'CO':
        return '😕';
      case 'FR':
        return '😱';
      case 'HE':
        return '😄';
      case 'NE':
        return '😐';
      case 'SA':
        return '😭';
      case 'SU':
        return '😮';
      default:
        return '';
    }
  };

  useEffect(() => {
    populateTable();
  }, [populateTable]);

  return (
    <main>
      <form>
        <textarea />
        <button>+</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Humor</th>
            <th>Descrição</th>
            <th>Criado em</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {moods &&
            moods.length > 0 &&
            moods.map((mood) => (
              <tr key={mood.id}>
                <td>{setEmojiByHumorAcronym(mood.acronym)}</td>
                <td>{mood.description}</td>
                <td>{mood.date}</td>
                <td>
                  <button onClick={handleEdit}>
                    <MdModeEditOutline />
                  </button>
                  <button>
                    <RiDeleteBin2Fill />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};
