import React from 'react'
import { ButtonStyled } from './style.js'

export const Button = ({ children, onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}
