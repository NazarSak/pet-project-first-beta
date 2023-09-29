import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { Container } from '../LogIn/login.styled';
import {
  ButContainer,
  UnderHeaderButton,
  ReportsContainer,
  ReportsContainerForCalendar,
  ReportText,
  CalendarText,
  TableContainer,
  TableSearchContainer,
  TableSearch,
  InputSearch,
  SelectCategory,
  Select,
  OptionItem,
} from './dashboard.styled';
import { Title } from 'front-end/components/exitModalka/ExitModalka.styled';
import reports from '../../../assets/svgImage/reports.svg';
import calendar from '../../../assets/svgImage/calendar.svg';

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

  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Опция 1', 'Опция 2', 'Опция 3'];

  const handleOptionClick = value => {
    setSelectedOption(value);
  };

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
      <TableContainer>
        <TableSearchContainer>
          <ReportsContainerForCalendar>
            <img src={calendar} alt="calendar" />
            <CalendarText>{currentDate}</CalendarText>
          </ReportsContainerForCalendar>
          <TableSearch>
            <InputSearch placeholder="Product description"></InputSearch>
            <SelectCategory>
              <Select
                value={selectedOption}
                onChange={e => handleOptionClick(e.target.value)}
              >
                <OptionItem value="">Product category</OptionItem>
                {options.map((option, index) => (
                  <OptionItem key={index} value={option}>
                    {option}
                  </OptionItem>
                ))}
              </Select>
            </SelectCategory>
          </TableSearch>
        </TableSearchContainer>
      </TableContainer>
    </Container>
    // </>
  );
};

export default Dashboard;
