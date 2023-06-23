import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../services/api/fetchUsers';
import Swal from 'sweetalert2';

import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineLock } from 'react-icons/md';

import { Input } from '../../Input';

import { StyledForm, StyledLink } from './style';
import '../../UI/swal-custom.css';

export const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
    const response = await loginUser(user.email, user.password);
    if (response.status === 200) {
      navigate('/home');
    } else {
      Swal.fire({
        icon: 'Error',
        title: 'Oops...',
        text: 'E-mail ou senha incorretos!',
        customClass: {
          confirmButton: 'custom-button-confim',
        },
      });
    }
  };

  return (
    <StyledForm>
      <div>
        <label htmlFor="email">E-mail</label>
        <Input
          icon={<AiOutlineUser size={20} />}
          type="text"
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
      <StyledLink to="/forgot-password">Esqueceu sua senha?</StyledLink>
      <button type="submit" onClick={handleSubmit}>
        Entrar
      </button>
    </StyledForm>
  );
};
