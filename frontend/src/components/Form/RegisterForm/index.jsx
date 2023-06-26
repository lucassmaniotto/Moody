import React, { useContext } from 'react';
import { UserContext } from '../../../context/User';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../services/api/fetchUsers';
import Swal from 'sweetalert2';

import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { MdOutlineLock } from 'react-icons/md';

import { Input } from '../../Input';

import { StyledForm } from './style';
import '../../UI/swal-custom.css';

export const Form = () => {
  const { email, setEmail, password, setPassword, name, setName } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    const response = await registerUser(user.name, user.email, user.password);
    if (response.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Cadastro realizado com sucesso!',
        customClass: {
          confirmButton: 'custom-button-confim',
        },
      });
      setName('');
      setEmail('');
      setPassword('');
      navigate('/');
    }
    if (response.status === 409) {
      Swal.fire({
        icon: 'error',
        title: 'E-mail inválido!',
        text: 'E-mail já cadastrado! Tente novamente com outro e-mail.',
        customClass: {
          confirmButton: 'custom-button-confim',
        },
      });
    }
    if (response.status === 400) {
      Swal.fire({
        icon: 'error',
        title: 'Formato de dados incorretos!',
        text: 'Preencha todos os campos corretamente!',
        customClass: {
          confirmButton: 'custom-button-confim',
        },
      });
    }
  };

  return (
    <StyledForm>
      <div>
        <label htmlFor="name">Nome</label>
        <Input
          icon={<AiOutlineUser size={20} />}
          type="text"
          placeholder="Escreva seu nome"
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <Input
          icon={<AiOutlineMail size={20} />}
          type="email"
          placeholder="Escreva seu e-mail"
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <Input
          icon={<MdOutlineLock size={20} />}
          type="password"
          placeholder="Escreva sua senha"
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Entrar
      </button>
    </StyledForm>
  );
};
