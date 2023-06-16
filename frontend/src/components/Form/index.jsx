import React, { useState } from 'react';

import { FormWrapper, TextArea, SubmitButton, Select } from './style';

export const Form = () => {
  const [textareaValue, setTextareaValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTextareaValue('');
  };

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextArea
        id="textarea"
        className="form-textarea"
        value={textareaValue}
        onChange={handleChange}
      />
      <Select id="select" className="form-select">
        <option value="0">Selecione</option>
        <option value="1">Feliz</option>
        <option value="2">2</option>
      </Select>
      <SubmitButton type="submit">+</SubmitButton>
    </FormWrapper>
  );
};
