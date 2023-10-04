import React, { useState } from 'react';

import { Container } from '../LogIn/login.styled';
import {
  ButContainer,
  UnderHeaderButton,
  ReportsContainer,
  ReportText,
  TableContainer,
} from './dashboard.styled';
import { Title } from 'front-end/components/exitModalka/ExitModalka.styled';
import reports from '../../../assets/svgImage/reports.svg';
import { FormTransaction } from '../../components/formTransaction/formTransaction';
import { Table } from 'front-end/components/Table/Table';

const Dashboard = () => {
  const [data, setData] = useState([]);

  const handleAddTransaction = (newItem) => {
    setData((prevData) => [...prevData, newItem]);
  };

  const deleteElement = (id) => {
    // Використовуємо setElements для оновлення стану
    setData((prevElements) => prevElements.filter((element) => element.id !== id));
  };

console.log(data);

  return (
    <Container style={{ height: '100%' }}>
      <ButContainer>
        <Title style={{ marginRight: 20 }}>Balance:</Title>
        <UnderHeaderButton style={{ marginRight: 16 }}>
          00.00 UAH
        </UnderHeaderButton>
        <UnderHeaderButton>Confirm</UnderHeaderButton>
        <ReportsContainer>
          <ReportText>Reports</ReportText>
          <img src={reports} alt="reportsSvg" />
        </ReportsContainer>
      </ButContainer>
      <TableContainer>
        <FormTransaction onAddTransaction={handleAddTransaction}/>
        <Table data={data} handleDelete={deleteElement}/>
      </TableContainer>
    </Container>
  );
};

export default Dashboard;
