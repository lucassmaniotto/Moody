import styled from 'styled-components';
import { blackColor, fourthColor, primaryColor } from '../variables';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(30deg, ${primaryColor} 0%, ${fourthColor} 100%);
`;

export const H1 = styled.h1`
  color: ${blackColor};
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.5;
`;

export const H2 = styled.h2`
  color: ${blackColor};
  font-size: 1.25rem;
  font-weight: 400;
`;
