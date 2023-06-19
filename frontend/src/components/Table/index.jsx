import React, { useCallback, useEffect, useState } from 'react';
import { getMoodRegister } from '../../services/api/getMoodRegister';
import { getMoodOptions } from '../../services/api/getMoods';
import Swal from 'sweetalert2';

import { Button } from '../Button/index';

import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';

import {
  TableBody,
  TableDataCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableWrapper,
} from './style.js';

import '../UI/swal-custom.css';

export const Table = () => {
  const [moods, setMoods] = useState([]);
  const [moodOptions, setMoodOptions] = useState([]);

  const populateTable = useCallback(async () => {
    const moods = await getMoodRegister();
    setMoods(moods);

    const moodOptions = await getMoodOptions();
    setMoodOptions(moodOptions);
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

  const handleEdit = () => {
    const selectOptions = moodOptions.map((option) => ({
      value: option.acronym,
      label: option.name,
    }));

    Swal.fire({
      title: 'Editar',
      html:
        '<div>' +
        '<div class="div-select">' +
        '<label for="humor">Humor:</label>' +
        `<select id="humor" class="custom-select">${generateSelectOptions(
          selectOptions,
        )}</select>` +
        '</div>' +
        '<div class="div-textarea">' +
        '<label for="description" class="custom-label">Descrição:</label>' +
        `<textarea id="description" class="custom-textarea"></textarea>` +
        '</div>' +
        '</div>',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Salvar',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'custom-button-confim',
        cancelButton: 'custom-button-cancel',
      },
      preConfirm: () => {
        const humor = document.getElementById('humor').value;
        const description = document.getElementById('description').value;

        console.log(humor, description);
      },
    });
  };

  const generateSelectOptions = (options) => {
    return options
      .map(
        (option) => `<option value="${option.value}">${option.label}</option>`,
      )
      .join('');
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
      <TableBody>
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
      </TableBody>
    </TableWrapper>
  );
};
