import React, { useCallback, useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../context/User';
import Swal from 'sweetalert2';

import { getMoodOptions } from '../../../services/api/fetchMoods';
import {
  getMoodRecordByUserId,
  getNextIdtoRecord,
  postMoodRecord,
} from '../../../services/api/fetchMoodRecord';

import { Table } from '../../Table';

import { FaPlus } from 'react-icons/fa';

import { FormWrapper, TextArea, SubmitButton, Select } from './style.js';
import '../../UI/swal-custom.css';

export const Form = () => {
  const [moods, setMoods] = useState([]);
  const [moodOptions, setMoodOptions] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');
  const { id } = useContext(UserContext);

  const populateTable = useCallback(async () => {
    try {
      const fetchedMoods = await getMoodRecordByUserId(id);
      setMoods(fetchedMoods);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

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
      user_id: id,
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
    } else if (mood.description.length > 150 || mood.description === '') {
      Swal.fire({
        icon: 'error',
        title: 'Descrição inválida!',
        text: 'A descrição é obrigatória e deve ter no máximo 150 caracteres.',
      });
    } else if (
      mood.acronym === '' ||
      mood.acronym === undefined ||
      mood.acronym === null ||
      mood.acronym === 'Selecione um humor'
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Seleção inválida!',
        text: 'Selecione um humor para continuar.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erro de serviço!',
        text: 'Ocorreu um erro ao cadastrar o humor. Tente novamente mais tarde.',
      });
    }
  }, [textareaValue, populateTable, id]);

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
        setMoods={setMoods}
        setEmojiByHumorAcronym={setEmojiByHumorAcronym}
      />
    </>
  );
};
