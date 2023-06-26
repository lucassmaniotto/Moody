import React, { useContext } from 'react';
import { UserContext } from '../../context/User';

import { Form } from '../../components/Form/CrudForm';

import { WrapStyled } from './style';
import { Container, H1, H2 } from '../../components/UI/shared/styled-components';

export const Home = () => {
  const { name } = useContext(UserContext);

  return (
    <Container>
      <WrapStyled>
        <H1>Moody ⛅</H1>
        <H2>Como você está se sentindo hoje {name}?</H2>
        <Form />
      </WrapStyled>
    </Container>
  );
};
