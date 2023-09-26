import React from 'react';
import { Container } from '../LogIn/login.styled';
import { ButContainer,UnderHeaderButton } from './dashboard.styled';
import { Title } from 'front-end/components/exitModalka/ExitModalka.styled';
const Dashboard = () => {
  return (
    // <>
      <Container style={{ height: '100%' }}>
        <ButContainer>
          <Title style={{marginRight:20}}>Balance:</Title>
          <UnderHeaderButton style={{marginRight:16}}>00.00 UAH</UnderHeaderButton>
          <UnderHeaderButton>Confirm</UnderHeaderButton>
        </ButContainer>
        {/* <h2>Hello this is Dashboard</h2> */}
      </Container>
    // </>
  );
};

export default Dashboard;
