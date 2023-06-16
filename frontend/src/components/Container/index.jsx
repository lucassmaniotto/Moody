import React from 'react';
import { ContainerStyled } from './style';
export const Container = ({ children }) => {
  return (
    <ContainerStyled>
      <div className="container">{children}</div>
    </ContainerStyled>
  );
};
