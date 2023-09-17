import React from 'react';
import { Container, Wrapper } from './login.styled';
import wallet from '../../../assets/svgImage/wallet.png';



export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <img src={wallet} alt="Wallet" width="675" height="545" />
      </Wrapper>
     
    </Container> 
  );
};
