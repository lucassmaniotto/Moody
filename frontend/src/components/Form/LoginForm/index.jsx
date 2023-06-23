import React from 'react';

import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineLock } from 'react-icons/md';

import { Input } from '../../Input';

import { StyledForm, StyledLink } from './style';

export const Form = () => {
  return (
    <StyledForm>
      <div>
        <label htmlFor="email">E-mail</label>
        <Input
          icon={<AiOutlineUser size={20} />}
          type="email"
          placeholder="Escreva seu e-mail"
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <Input
          icon={<MdOutlineLock size={20} />}
          type="password"
          placeholder="Escreva sua senha"
        />
      </div>
        <StyledLink to="/forgot-password">Esqueceu sua senha?</StyledLink>
      <button type="submit">Entrar</button>
    </StyledForm>
  );
};
