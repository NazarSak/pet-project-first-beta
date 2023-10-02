import React from 'react';
import {
  TableCategory,
  TableColumnContainer,
  TableDate,
  TableDescription,
  TableHeader,
  TableSum,
  ContainerMessage,
  TitleMessage,
} from './Table.styled';
import { TableArray } from '../tableArray/TableArray';
import emptyWallet from '../../../assets/svgImage/emptyWallet.png';

export const Table = ({ data }) => {
  return (
    <div>
      <TableHeader>
        <TableDate>Date</TableDate>
        <TableDescription>Description</TableDescription>
        <TableCategory>Category</TableCategory>
        <TableSum>Sum</TableSum>
      </TableHeader>
      {data.length === 0 ? (
        <ContainerMessage>
          <img src={emptyWallet} alt="emptyWallet" width="500" height="400" />
          <TitleMessage>You don't have any transaction</TitleMessage>
        </ContainerMessage>
      ) : (
        <TableColumnContainer>
          <TableArray data={data} />
        </TableColumnContainer>
      )}
    </div>
  );
};
