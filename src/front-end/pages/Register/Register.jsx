import React from 'react';
import { Wrapper, Container } from '../LogIn/login.styled';
import Form from 'front-end/components/form/Form';
import wallet from '../../../assets/svgImage/wallet.png';

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <img src={wallet} alt="Wallet" width="675" height="545" />
      </Wrapper>
     <Form/>
    </Container> 
  );
};
