import React from 'react';

import { Form } from './components/Form';
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
      <Form />
    </Container>
  );
};
