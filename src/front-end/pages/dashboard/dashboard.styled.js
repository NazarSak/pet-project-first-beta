import styled from 'styled-components';

export const ButContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: baseline;
  margin-top: 40px;
`;

export const UnderHeaderButton = styled.button`
  border-radius: 16px;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.02em;
  padding: 13px 35px;
  border: none;
  border: 2px solid #80848f;
  background-color: rgba(0, 0, 0, 0);
  color: #c7ccdc;
`;

export const ReportsContainer = styled.div`
  position: absolute;
  right: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
`;


export const TableContainer = styled.div`
margin-top: 140px;
padding: 32px;
position: absolute;
width: 1066px;
height: 542px;
border-radius: 0 20px 20px 20px;
background-color: #383847;
opacity: 0.8;
`;

export const ReportsContainerForCalendar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const TableSearchContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const TableSearch = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  width: 578px;
  height: 44px;
  border-radius: 16px 16px 16px 0px;
  border: 2px solid var(--grey, #474759);
`;

export const InputSearch = styled.input`
  width: 250px;
  background: transparent;
  border: none;
  outline: none;
  &::placeholder {
    color: var(--white-3, rgba(199, 204, 220, 0.5));
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
  }
`;

export const SelectCategory = styled.div`
  display: flex;
  aling-item: center;
  justify-content: center;
  margin-left: 20px;
  width: 170px;
  height: 44px;
  flex-shrink: 0;
  border: 2px solid var(--grey, #474759);
`;

export const Select = styled.select`
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



export const ReportText = styled.p`

  color: #c7ccdc80;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-align: right;
`;

export const CalendarText = styled.p`
  color: #c7ccdc;
  font-size: 12px;
  font-weight: 900;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-align: left;
`;
