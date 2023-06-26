import React, { useCallback, useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/User';
import Swal from 'sweetalert2';
import { formatDate } from '../../util/formatDate';
import { getMoodOptions } from '../../services/api/fetchMoods';
import {
  getMoodRecordById,
  deleteMoodRecord,
  updateMoodRecord,
} from '../../services/api/fetchMoodRecord';

import { Button } from '../Button';

import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';

import {
  TableBody,
  TableDataCell,
  TableHeader,
  TableHeaderCell,
  TableMessage,
  TableRow,
  TableWrapper,
} from './style.js';

export const Table = ({ moods, setMoods, setEmojiByHumorAcronym }) => {
  const [moodOptionsSwal, setMoodOptionsSwal] = useState([]);
  const { id } = useContext(UserContext);

  const populateSwalOptions = useCallback(async () => {
    try{
      const fetchedMoodOptions = await getMoodOptions();
      setMoodOptionsSwal(fetchedMoodOptions);
    } catch (error) {
      Swal.fire({
        title: 'Erro!',
        text: 'Ocorreu um erro ao carregar as opções de humor.',
        icon: 'error',
        customClass: {
          confirmButton: 'custom-button-confim',
        },
      });
    }
  }, []);

  const reloadRecords = useCallback(async () => {
    const fetchedMoods = await getMoodRecordById(id);
    setMoods(fetchedMoods);
  }, [setMoods, id]);

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

  const handleEdit = (id) => {
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
      preConfirm: async () => {
        const humor = document.getElementById('humor').value;
        const description = document.getElementById('description').value;

        const data = {
          acronym: humor,
          description: description,
        };
        await updateMoodRecord(id, data);
        await reloadRecords();
        if (data.acronym && data.description && data.description.length > 0) {
          Swal.fire({
            title: 'Sucesso!',
            text: 'O registro foi atualizado com sucesso.',
            icon: 'success',
            customClass: {
              confirmButton: 'custom-button-confim',
            },
          });
        } else {
          Swal.fire({
            title: 'Erro!',
            text: 'Os dados não foram atualizados. Informe os campos corretamente.',
            icon: 'error',
            customClass: {
              confirmButton: 'custom-button-confim',
            },
          });
        }
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
        {moods && moods.length > 0 ? (
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
                <Button onClick={() => handleEdit(mood.id)}>
                  <MdModeEditOutline size={18} />
                </Button>
                <Button onClick={() => handleDelete(mood.id)}>
                  <RiDeleteBin2Fill size={18} />
                </Button>
              </TableDataCell>
            </TableRow>
          ))
        ) : (
          <TableMessage>
            <td>Nenhum registro encontrado 😢</td>
          </TableMessage>
        )}
      </TableBody>
    </TableWrapper>
  );
};
