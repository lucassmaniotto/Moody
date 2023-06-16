import styled from 'styled-components';
import {
  secondaryColor,
  fourthColor,
  whiteColor,
  greyColor,
  blackColor,
  fifthColor,
} from '../UI/variables';

export const ButtonStyled = styled.button`
  background-color: ${whiteColor};
  border: 1px solid ${greyColor};
  border-radius: 4px;
  color: ${blackColor};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 8px;
  margin: 0 2px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${secondaryColor};
    border: 1px solid ${fourthColor};
    box-shadow: 0 0 3px .5px ${fifthColor};
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;
