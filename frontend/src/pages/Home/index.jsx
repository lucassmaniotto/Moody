import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/User';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

import { Form } from '../../components/Form/CrudForm';

import { WrapStyled } from './style';
import { Container, H1, H2 } from '../../components/UI/shared/styled-components';

export const Home = () => {
  const { name, id } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('/', { replace: true });
      Swal.fire({
        icon: 'warning',
        title: 'Acesso negado!',
        text: 'Você precisa estar logado para acessar essa página!',
        customClass: {
          confirmButton: 'custom-button-confim',
        },
      });
    }
  }, [id, navigate]);

  return (
    <Container>
      <WrapStyled>
        <H1>Moody ⛅</H1>
        <H2>Como você está se sentindo hoje, {name}?</H2>
        <Form />
      </WrapStyled>
    </Container>
  );
};


