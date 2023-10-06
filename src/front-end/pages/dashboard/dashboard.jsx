import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data')) || [];
    setData(storedData);
  }, []);

  const handleAdd = newItem => {
    setData(prevData => {
      const allData = [...prevData, newItem];
      localStorage.setItem('data', JSON.stringify(allData));
      return allData;
    });
  };

  const deleteElement = id => {
    setData(prevElements => {
      const updatedData = prevElements.filter(element => element.id !== id);
      localStorage.setItem('data', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <Container style={{ height: '100%', alignItems: 'unset' }}>
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
        <FormTransaction onAddTransaction={handleAdd} />
        <Table data={data} handleDelete={deleteElement} />
      </TableContainer>
    </Container>
  );
};

export default Dashboard;
