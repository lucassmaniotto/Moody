import React from 'react';
import { Div, StyledInput } from './style';


export const Input = ({ icon, type, placeholder }) => {
  return (
    <Div>
      {icon}
      <StyledInput type={type} placeholder={placeholder} />
    </Div>
  );
};
