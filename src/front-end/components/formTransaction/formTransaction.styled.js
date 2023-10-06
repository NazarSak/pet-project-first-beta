import styled from 'styled-components';

export const TableSearchContainer = styled.form`
  display: flex;
  gap: 32px;
`;

export const TableSearch = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  width: 538px;
  height: 44px;
  border-radius: 16px 16px 16px 0px;
  border: 2px solid var(--grey, #474759);
`;

export const InputSearch = styled.input`
  width: 250px;
  background: transparent;
  border: none;
  outline: none;
  color: rgba(199, 204, 220, 0.5);
  &::placeholder {
    color: var(--white-3, rgba(199, 204, 220, 0.5));
    font-size: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
  }
`;

export const SelectCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  width: 170px;
  height: 44px;
  flex-shrink: 0;
  border: 2px solid var(--grey, #474759);
`;

export const Select = styled.select`
  width: 124px;
  background: transparent;
  border: none;
  outline: none;
  color: rgba(199, 204, 220, 0.5);
`;

export const OptionItem = styled.option`
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  background-color: #383847;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const CalculatorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InputCalculator = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 24px;
  margin-left: 24px;
  color: var(--White-2, #c7ccdc);
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ButtonInput = styled.button`
  width: 136px;
  height: 44px;
  flex-shrink: 0;
  border: none;
  border-radius: 16px;
  background: var(--button, #42a652);
  box-shadow: 1px 3px 5px 0px rgba(96, 196, 112, 0.35);
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const ButtonClear = styled.button`
  width: 136px;
  height: 44px;
  flex-shrink: 0;
  border: none;
  background: transparent;
  border-radius: 16px;
  border: 2px solid var(--grey, #474759);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const ReportsContainerForCalendar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CalendarText = styled.p`
  color: #c7ccdc;
  font-size: 12px;
  font-weight: 900;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-align: left;
`;