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
  InputCalculator,
  ButtonContainer,
  ButtonInput,
  ButtonClear,
} from './formTransaction.styled';
import calendar from '../../../assets/svgImage/calendar.svg';
import calculator from '../../../assets/svgImage/calculator.svg';
import { Options } from '../Arrays/Options';

export const FormTransaction = ({ onAddTransaction }) => {
  const [currentDate, setCurrentDate] = useState(
    moment().tz('Europe/Kiev').format('DD-MM-YYYY')
  );
  const [selectedOption, setSelectedOption] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [amount, setAmount] = useState('0.00');

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

  const handleInputChange = e => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/[^\d.]/g, '');

    const dotIndex = inputValue.indexOf('.');
    if (dotIndex !== -1) {
      inputValue = inputValue.slice(0, dotIndex + 3);
    }
    const parsedValue = parseFloat(inputValue);
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100000) {
      setAmount(parsedValue.toFixed(2));
    } else if (!isNaN(parsedValue) && parsedValue > 100000) {
      setAmount('100000.00');
    } else {
      setAmount('0.00');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (productDesc && selectedOption && amount !== '0.00') {
      const newItem = {
        id: Date.now(),
        description: productDesc,
        category: selectedOption,
        sum: amount,
        time: moment().format('DD-MM-YYYY'),
      };
      onAddTransaction(newItem);
      handleClear();
    }
  };

  const handleClear = () => {
    setAmount('0.00');
    setProductDesc('');
    setSelectedOption('');
  };

  return (
    <TableSearchContainer onSubmit={handleSubmit}>
      <ReportsContainerForCalendar>
        <img src={calendar} alt="calendar" />
        <CalendarText>{currentDate}</CalendarText>
      </ReportsContainerForCalendar>
      <TableSearch>
        <InputSearch
          placeholder="Product description"
          onChange={e => setProductDesc(e.target.value)}
          value={productDesc}
        />
        <SelectCategory>
          <Select
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}
          >
            <OptionItem value="">Product category</OptionItem>
            {Options.map((option, index) => (
              <OptionItem key={index} value={option}>
                {option}
              </OptionItem>
            ))}
          </Select>
        </SelectCategory>
        <CalculatorContainer>
          <InputCalculator
            type="text"
            value={amount}
            onChange={handleInputChange}
            placeholder="Enter amount (0.00 - 100000.00)"
            onKeyDown={e => {
              if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
              }
            }}
          />
          <img src={calculator} alt="calculator" />
        </CalculatorContainer>
      </TableSearch>
      <ButtonContainer>
        <ButtonInput>Input</ButtonInput>
        <ButtonClear onClick={handleClear}>Clear</ButtonClear>
      </ButtonContainer>
    </TableSearchContainer>
  );
};
