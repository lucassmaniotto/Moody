import React, { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { Table } from '../Table';

import { FaPlus } from 'react-icons/fa';

import {
  getMoodRecord,
  getNextIdtoRecord,
  postMoodRecord,
} from '../../services/api/fetchMoodRecord';
import { getMoodOptions } from '../../services/api/fetchMoods';

import { FormWrapper, TextArea, SubmitButton, Select } from './style.js';

import '../UI/swal-custom.css';

export const Form = () => {
  const [moods, setMoods] = useState([]);
  const [moodOptionsSwal, setMoodOptionsSwal] = useState([]);
  const [moodOptions, setMoodOptions] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');

  const populateTable = useCallback(async () => {
    const fetchedMoods = await getMoodRecord();
    setMoods(fetchedMoods);

    const fetchedMoodOptions = await getMoodOptions();
    setMoodOptionsSwal(fetchedMoodOptions);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addMood();
    setTextareaValue('');
  };

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const populateOptions = useCallback(async () => {
    const fetchedMoodOptions = await getMoodOptions();
    setMoodOptions(fetchedMoodOptions);
  }, []);

  const addMood = useCallback(async () => {
    const mood = {
      id: await getNextIdtoRecord(),
      acronym: document.getElementById('select').value,
      description: textareaValue,
    };
    const response = await postMoodRecord(mood);
    if (response.status === 201) {
      Swal.fire({
        icon: 'success',
        text: 'Humor cadastrado com sucesso!',
        showConfirmButton: true,
        timer: 1500,
      });
      populateTable();
    } else if (mood.description.length > 200 || mood.description === '') {
      Swal.fire({
        icon: 'error',
        title: 'Descrição inválida!',
        text: 'A descrição é obrigatória e deve ter no máximo 200 caracteres.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Seleção inválida!',
        text: 'Selecione um humor para continuar.',
      });
    }
  }, [textareaValue, populateTable]);

  useEffect(() => {
    populateTable();
    populateOptions();
  }, [populateTable, populateOptions]);

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <TextArea
          id="textarea"
          className="form-textarea"
          value={textareaValue}
          onChange={handleChange}
        />
        <Select id="select" className="form-select">
          <option value="">Selecione um humor</option>
          {moodOptions &&
            moodOptions.length > 0 &&
            moodOptions.map((mood) => (
              <option key={mood.acronym} value={mood.acronym}>
                {mood.name}
              </option>
            ))}
        </Select>
        <SubmitButton type="submit">
          <FaPlus size={12} />
        </SubmitButton>
      </FormWrapper>
      <Table
        moods={moods}
        setEmojiByHumorAcronym={setEmojiByHumorAcronym}
        handleEdit={handleEdit}
      />
    </>
  );
};
