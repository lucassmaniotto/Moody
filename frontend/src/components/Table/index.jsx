import React, { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { formatDate } from '../../util/formatDate';
import { getMoodOptions } from '../../services/api/fetchMoods';
import {
  deleteMoodRecord,
  getMoodRecord,
} from '../../services/api/fetchMoodRecord';

import { Button } from '../Button';

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

export const Table = ({ moods, setMoods, setEmojiByHumorAcronym }) => {
  const [moodOptionsSwal, setMoodOptionsSwal] = useState([]);

  const populateSwalOptions = useCallback(async () => {
    const fetchedMoodOptions = await getMoodOptions();
    setMoodOptionsSwal(fetchedMoodOptions);
  }, []);

  const reloadRecords = useCallback(async () => {
    const fetchedMoods = await getMoodRecord();
    setMoods(fetchedMoods);
  }, [setMoods]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter a exclusão do registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Não, cancelar!',
      customClass: {
        confirmButton: 'custom-button-confim',
        cancelButton: 'custom-button-cancel',
      },
      preConfirm: async () => {
        const response = await deleteMoodRecord(id);
        await reloadRecords();
        if (response.status === 204) {
          Swal.fire({
            title: 'Excluído!',
            text: 'O registro foi excluído com sucesso.',
            icon: 'success',
            customClass: {
              confirmButton: 'custom-button-confim',
            },
          });
        } else {
          Swal.fire({
            title: 'Erro!',
            text: 'Ocorreu um erro ao excluir o registro.',
            icon: 'error',
            customClass: {
              confirmButton: 'custom-button-confim',
            },
          });
        }
      },
    });
  };

  const handleEdit = () => {
    const selectOptions = moodOptionsSwal.map((option) => ({
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
    populateSwalOptions();
  }, [populateSwalOptions]);

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
            <TableRow key={mood.id} id={mood.id}>
              <TableDataCell className="humor">
                {setEmojiByHumorAcronym(mood.acronym)}
              </TableDataCell>
              <TableDataCell className="description">
                {mood.description}
              </TableDataCell>
              <TableDataCell>{formatDate(mood.date)}</TableDataCell>
              <TableDataCell>
                <Button onClick={handleEdit}>
                  <MdModeEditOutline size={18} />
                </Button>
                <Button onClick={() => handleDelete(mood.id)}>
                  <RiDeleteBin2Fill size={18} />
                </Button>
              </TableDataCell>
            </TableRow>
          ))}
      </TableBody>
    </TableWrapper>
  );
};
