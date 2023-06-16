import styled from 'styled-components';
import {
  fifthColor,
  greyColor,
  secondaryColor,
  whiteColor,
} from '../UI/variables';

export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin: 0 auto;
`;

export const TextArea = styled.textarea`
  width: 300px;
  padding: 5px;
  margin: 10px;
  border: 1px solid ${greyColor};
  border-radius: 5px;
  resize: none;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: ${secondaryColor};
  color: ${whiteColor};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${secondaryColor};
    box-shadow: 0 0 3px 0.5px ${fifthColor};
    color: ${whiteColor};
  }
`;

export const Select = styled.select`
  padding: 10px 40px;
  margin: 10px;
  border: 1px solid ${greyColor};
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  option {
    text-align: left;
    padding: 5px;
    cursor: pointer;
  }
`;
