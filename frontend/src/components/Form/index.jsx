import React, { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { FormWrapper, TextArea, SubmitButton, Select } from './style';
import { FaPlus } from 'react-icons/fa';

export const Form = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [moods, setMoods] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTextareaValue('');
  };

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const fetchMoods = async () => {
    try {
      const response = await fetch('http://localhost:3333/moods');
      const data = await response.json();
      return data;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'API indisponível',
        text: 'Ocorreu um erro ao buscar as opções. Por favor, tente novamente mais tarde.',
      });
    }
  };

  const populateOptions = useCallback(async () => {
    const moods = await fetchMoods();
    setMoods(moods);
  }, []);

  useEffect(() => {
    populateOptions();
  }, [populateOptions]);

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextArea
        id="textarea"
        className="form-textarea"
        value={textareaValue}
        onChange={handleChange}
      />
      <Select id="select" className="form-select">
        <option value="">Selecione um humor</option>
        {moods.map((mood) => (
          <option key={mood.acronym} value={mood.name}>
            {mood.name}
          </option>
        ))}
      </Select>
      <SubmitButton type="submit"><FaPlus size={12}/></SubmitButton>
    </FormWrapper>
  );
};
