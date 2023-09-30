import styled from "styled-components";

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 32px;
  margin-top: 75px;
  width: 746px;
  height: 38px;
  border-radius: 16px 16px 0 0;
  background-color: rgba(86, 86, 107, 0.5);
`;

export const TableDate = styled.p`
  width: 98px;
  margin-left: 24px;
  color: var(--color-text, #f6f7fb);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const TableDescription = styled.p`
  width: 188px;
  margin-left: 24px;
  color: var(--color-text, #f6f7fb);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const TableCategory = styled.p`
  width: 120px;
  margin-left: 24px;
  color: var(--color-text, #f6f7fb);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const TableSum = styled.p`
  width: 120px;
  margin-left: 24px;
  color: var(--color-text, #f6f7fb);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const TableColumnContainer = styled.ul`
  width: 745.5px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 354px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #474759;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #60c470;
  }
`;

export const TableColumn = styled.li`
  list-style: none;
  margin: 0;
  width: 738.8px;
  height: 38px;
  border-width: 1px 6px 1px 2px;
  border-style: solid;
  border-color: var(--grey, #474759);
`;