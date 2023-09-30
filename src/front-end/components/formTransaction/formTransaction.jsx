import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import {
  CalendarText,
  ReportsContainerForCalendar,
  TableSearchContainer,
  TableSearch,
  InputSearch,
  SelectCategory,
  Select,
  OptionItem,
  CalculatorContainer,
  CalculatorText,
  ButtonContainer,
  ButtonInput,
  ButtonClear,
} from './formTransaction.styled';
import calendar from '../../../assets/svgImage/calendar.svg';
import calculator from '../../../assets/svgImage/calculator.svg';

export const FormTransaction = () => {
  const [currentDate, setCurrentDate] = useState(
    moment().tz('Europe/Kiev').format('DD-MM-YYYY')
  );
  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(moment().tz('Europe/Kiev').format('DD-MM-YYYY'));
    };
    const now = moment();
    const midnight = moment()
      .tz('Europe/Kiev')
      .startOf('day')
      .add(12, 'hours');
    let delay = midnight.diff(now);
    if (delay < 0) {
      delay = midnight.add(1, 'day').diff(now);
    }
    const intervalId = setInterval(updateDate, delay);

      return () => clearInterval(intervalId);
    }, []);

  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    'Transport',
    'Health',
    'Alcohol',
    'Entertainment',
    'Housing',
    'Technique',
    'Communal, communication',
    'Sports, hobbies',
    'Education',
    'Other',
  ];

  const handleOptionClick = value => {
    setSelectedOption(value);
  };

  return (
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
        <CalculatorContainer>
          <CalculatorText>00:00</CalculatorText>
          <img src={calculator} alt="calculator" />
        </CalculatorContainer>
      </TableSearch>
      <ButtonContainer>
        <ButtonInput>Input</ButtonInput>
        <ButtonClear>Clear</ButtonClear>
      </ButtonContainer>
    </TableSearchContainer>
  );
};
