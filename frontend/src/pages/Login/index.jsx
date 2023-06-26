import React from 'react';

import {
  Container,
  H1,
  H2,
} from '../../components/UI/shared/styled-components';
import { DivTitle, StyledLink, WrapStyled } from './style';
import { Form } from '../../components/Form/LoginForm';

export const Login = () => {
  return (
    <Container>
      <WrapStyled>
        <DivTitle>
          <H1>Bem vindo ao Moody⛅</H1>
          <H2>Como está se sentindo hoje?</H2>
        </DivTitle>
        <Form />
        <p>Ou registre-se abaixo:</p>
        <StyledLink to="/register">REGISTRAR-SE</StyledLink>
      </WrapStyled>
    </Container>
  );
};
