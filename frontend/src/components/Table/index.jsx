import React, { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Button } from '../Button/index';

import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';

import {
  TableDataCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableWrapper,
} from './style.js';

export const Table = () => {
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

  const populateTable = useCallback(async () => {
    const moods = await fetchMoods();
    setMoods(moods);
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
    <TableWrapper>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Humor</TableHeaderCell>
          <TableHeaderCell>Descrição</TableHeaderCell>
          <TableHeaderCell>Criado em</TableHeaderCell>
          <TableHeaderCell>Ações</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <tbody>
        {moods &&
          moods.length > 0 &&
          moods.map((mood) => (
            <TableRow key={mood.id}>
              <TableDataCell className="humor">
                {setEmojiByHumorAcronym(mood.acronym)}
              </TableDataCell>
              <TableDataCell className="description">
                {mood.description}
              </TableDataCell>
              <TableDataCell>{mood.date}</TableDataCell>
              <TableDataCell>
                <Button onClick={handleEdit}>
                  <MdModeEditOutline size={18} />
                </Button>
                <Button>
                  <RiDeleteBin2Fill size={18} />
                </Button>
              </TableDataCell>
            </TableRow>
          ))}
      </tbody>
    </TableWrapper>
  );
};
