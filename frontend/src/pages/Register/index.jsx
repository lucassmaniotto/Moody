import React from 'react';

import {
  Container,
  H1,
  H2,
} from '../../components/UI/shared/styled-components';
import { DivTitle, WrapStyled, StyledLink } from './style';
import { Form } from '../../components/Form/RegisterForm';

export const Register = () => {
  return (
    <Container>
      <WrapStyled>
        <DivTitle>
          <H1>Se inscreva no Moody⛅</H1>
          <H2>Registre-se nos campos do formulário abaixo:</H2>
        </DivTitle>
        <Form />
        <StyledLink to="/">Já tem uma conta? Faça login</StyledLink>
      </WrapStyled>
    </Container>
  );
};
