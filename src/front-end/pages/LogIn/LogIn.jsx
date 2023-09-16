import React from 'react';
import { Container, Wrapper } from './login.styled';
// import { ToLogin } from '../home/home.styled';
import wallet from '../../../assets/svgImage/wallet.png';
import { SharedForm } from 'front-end/components/Form/form';

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <img src={wallet} alt="Wallet" width="675" height="545" />
      </Wrapper>
      <SharedForm />
    </Container>
  );
};
