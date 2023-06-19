import React, { useCallback, useEffect, useState } from 'react';
import { getMoodOptions } from '../../services/api/getMoods';
import { getLastId } from '../../services/api/getMoodRegister';
import Swal from 'sweetalert2';

import { FaPlus } from 'react-icons/fa';

import { FormWrapper, TextArea, SubmitButton, Select } from './style';

export const Form = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [moods, setMoods] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addMood();
    setTextareaValue('');
  };

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const populateOptions = useCallback(async () => {
    const moods = await getMoodOptions();
    setMoods(moods);
  }, []);

  const addMood = useCallback(async () => {
    const mood = {
      id: await getLastId(),
      acronym: document.getElementById('select').value,
      description: textareaValue,
    };

    const response = await fetch('http://localhost:3333/mood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mood),
    });

    if (response.status === 201) {
      window.location.reload();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo deu errado!',
      });
    }
  }, [textareaValue]);

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
        {moods &&
          moods.length > 0 &&
          moods.map((mood) => (
            <option key={mood.acronym} value={mood.acronym}>
              {mood.name}
            </option>
          ))}
      </Select>
      <SubmitButton type="submit">
        <FaPlus size={12} />
      </SubmitButton>
    </FormWrapper>
  );
};
