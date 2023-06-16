import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: 45px;
`;

export const TextArea = styled.textarea`
  width: 300px;
  padding: 5px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background-color: #337ab7;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #286090;
  }
`;

export const Select = styled.select`
  padding: 10px 40px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  option {
    text-align: left;
    padding: 5px;
    cursor: pointer;
  }
`;
