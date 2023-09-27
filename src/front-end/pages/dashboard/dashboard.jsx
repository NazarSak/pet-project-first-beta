import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { Container } from '../LogIn/login.styled';
import { ButContainer, UnderHeaderButton,ReportsContainer,ReportText } from './dashboard.styled';
import { Title } from 'front-end/components/exitModalka/ExitModalka.styled';
import reports from '../../../assets/svgImage/reports.svg';

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(
    moment().tz('Europe/Kiev').format('DD-MM-YYYY')
  );

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(moment().tz('Europe/Kiev').format('DD-MM-YYYY'));
    };

    const now = moment();
    const midnight = moment().tz('Europe/Kiev').startOf('day').add(12, 'hours');

    let delay = midnight.diff(now);

    if (delay < 0) {
      delay = midnight.add(1, 'day').diff(now);
    }

    const intervalId = setInterval(updateDate, delay);

    return () => clearInterval(intervalId);
  }, []);

  return (
    // <>
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
      <p>{currentDate}</p>
    </Container>
    // </>
  );
};

export default Dashboard;
