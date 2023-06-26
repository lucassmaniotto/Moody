import styled from 'styled-components';
import { Link } from "react-router-dom";
import { greyColor, primaryColor, whiteColor } from '../../components/UI/variables';

export const WrapStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${greyColor};
  border-radius: 10px;
  background-color: ${whiteColor};
  padding: 2rem;

  p {
    font-size: 0.85rem;
    letter-spacing: 0.05rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
`;

export const DivTitle = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    align-self: flex-start;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${primaryColor};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  transition: color 0.3s ease-in-out;
  margin: 1rem 0 2rem 0;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 0.5rem;
  }
`;
