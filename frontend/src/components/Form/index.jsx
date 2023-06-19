import React, { useCallback, useEffect, useState } from 'react';
import { getMoodOptions } from '../../services/api/getMoods';

import { FaPlus } from 'react-icons/fa';

import { FormWrapper, TextArea, SubmitButton, Select } from './style';

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

  const populateOptions = useCallback(async () => {
    const moods = await getMoodOptions();
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
        {moods &&
          moods.length > 0 &&
          moods.map((mood) => (
            <option key={mood.acronym} value={mood.name}>
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
