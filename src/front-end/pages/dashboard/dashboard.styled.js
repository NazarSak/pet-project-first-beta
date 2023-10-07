import styled from 'styled-components';

export const ButContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: baseline;
  margin-top: 40px;
`;

export const UnderHeaderButton = styled.div`
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

export const ReportText = styled.p`
  color: #c7ccdc80;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-align: right;
`;
