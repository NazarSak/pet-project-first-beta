import React from 'react';
import { Link } from 'react-router-dom';
import {
  Title,
  Container,

  ToRegister,
  ContainerButtons,
  ToLogin,
} from './home.styled';

export const Home = () => {
  return (
    <Container>

      <Title>Welcome to Budget Boss </Title>
      <ContainerButtons>
        <Link to="login">
        <ToLogin>Log in</ToLogin>
        </Link>
        <Link to="register">
          <ToRegister>Registration</ToRegister>
        </Link>
      </ContainerButtons>
    </Container>
  );
};
