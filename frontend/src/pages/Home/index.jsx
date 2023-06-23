import React from 'react';

import { Form } from '../../components/Form/CrudForm';

import { WrapStyled } from './style';
import { Container, H1 } from '../../components/UI/shared/styled-components';

export const Home = () => {
  return (
    <Container>
      <WrapStyled>
        <H1>Moody ⛅</H1>
        <Form />
      </WrapStyled>
    </Container>
  );
};
