import React from 'react';

import { Crud } from './components/CRUD';
import { Container } from './components/Container';

import styled from 'styled-components';
import { blackColor } from './components/UI/variables';

const H1 = styled.h1`
  color: ${blackColor};
  font-size: 2.5rem;
`;

export const App = () => {
  return (
    <Container>
      <H1>Moody ⛅</H1>
      <Crud />
    </Container>
  );
};
