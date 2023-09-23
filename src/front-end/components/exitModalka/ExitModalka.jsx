import React from 'react';
import { ExitContainer, Logo, ExitButton } from '../header/header.styled';

export const ExitModalka = ({ user, handleClick }) => {
  return (
    <>
      <ExitContainer>
        <Logo>Welcome:{user}</Logo>
        <ExitButton onClick={handleClick}> Exit</ExitButton>
      </ExitContainer>
    </>
  );
};
