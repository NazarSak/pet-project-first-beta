import React from 'react';
import { Link } from 'react-router-dom';
import {
  Title,
  Container,
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
      </ContainerButtons>
    </Container>
  );
};
