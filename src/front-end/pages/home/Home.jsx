import { Title, Container, ContainerImage } from './home.styled';

export const Home = () => {
  return (
    <Container>
      <ContainerImage />
      <Title>Welcome to Budget Boss </Title>
      <button>Register</button>
      <button>Log in</button>
    </Container>
  );
};
