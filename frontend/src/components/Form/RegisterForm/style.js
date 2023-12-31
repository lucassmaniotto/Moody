import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { blackColor, primaryColor, secondaryColor, tertiaryColor, whiteColor } from '../../UI/variables';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem 0;
  width: 70%;

  div {
    width: 100%;
    margin-top: 0.75rem;
  }

  label {
    font-size: 0.85rem;
    font-weight: 500;
    color: ${blackColor};
    letter-spacing: 0.05rem;
  }

  button {
    color: ${whiteColor};
    padding: 0.5rem 1rem;
    margin: 2rem;
    border-radius: 1rem;
    border: none;
    width: 100%;
    background: linear-gradient(240deg, ${primaryColor} 0%, ${tertiaryColor} 100%);
    transition: background 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      background: linear-gradient(240deg, ${primaryColor} 0%, ${secondaryColor} 100%);
    }
  }
`;


export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${primaryColor};
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  transition: color 0.3s ease-in-out;
  align-self: flex-end;
  margin: 1rem 0 2rem 0;

  &:hover {
    text-decoration: underline;
  }
`;
