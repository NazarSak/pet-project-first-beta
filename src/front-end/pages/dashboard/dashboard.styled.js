import styled from 'styled-components';

export const ButContainer = styled.div`
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
  display: flex;
  margin-left: 300px;
  align-items: center;
  gap: 15px;
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
